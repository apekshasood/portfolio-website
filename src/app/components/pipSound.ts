"use client";

// Pip's sounds: a soft two-note chime (Web Audio, no files) and a short spoken greeting
// (the browser's built-in speech voices). Browsers only allow sound after the visitor
// clicks or taps, so call these from a click handler.

const KEY = "pip-sound";

export function soundOn() {
  try {
    return localStorage.getItem(KEY) !== "off";
  } catch {
    return true;
  }
}

export function setSoundOn(on: boolean) {
  try {
    localStorage.setItem(KEY, on ? "on" : "off");
  } catch {
    // storage blocked: the setting just won't be remembered
  }
  if (!on && typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
}

let ctx: AudioContext | null = null;

export function chime() {
  if (!soundOn() || typeof window === "undefined") return;
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    ctx = ctx || new AC();
    const now = ctx.currentTime;
    [880, 1318.5].forEach((freq, i) => {
      const osc = ctx!.createOscillator();
      const gain = ctx!.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const t = now + i * 0.12;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      osc.connect(gain).connect(ctx!.destination);
      osc.start(t);
      osc.stop(t + 0.4);
    });
  } catch {
    // no audio available
  }
}

function pickVoice(voices: SpeechSynthesisVoice[]) {
  const en = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
  const liked = /samantha|karen|moira|tessa|zira|aria|jenny|google uk english female|google us english|female/i;
  return en.find((v) => liked.test(v.name)) || en[0] || voices[0];
}

export function say(text: string) {
  if (!soundOn() || typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  const speak = () => {
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice(synth.getVoices());
    if (v) u.voice = v;
    u.pitch = 1.7; // higher = cuter
    u.rate = 1.05;
    u.volume = 0.9;
    synth.cancel();
    synth.speak(u);
  };
  // Some browsers load voices late.
  if (synth.getVoices().length) speak();
  else {
    const once = () => {
      synth.removeEventListener("voiceschanged", once);
      speak();
    };
    synth.addEventListener("voiceschanged", once);
    setTimeout(once, 400);
  }
}
