const SECOND_APT_MY_OLD_CAPTION_SCENES = new Set([
  "second_door_outside",
  "second_door_open",
  "second_room_turn_back",
  "second_room_lookout_play",
]);

const PHONE_CALL_OPEN_LINE =
  "Listen. I have some bad news. I've seen some corroborating evidence pertaining to the rumors that've dogged your boy all these years.";
const PHONE_CONFRONT_LINE =
  "What the hell is this? Are you threatening me?";
const PHONE_PEACE_LINE =
  "Now hold on, that's not what this is. How long have we been friends for, Chip? What I'm saying is that this is going to come out, and people are going to talk. I'm trying to help you get ahead of this thing. I think it's time for you and Martha to have a real 'heart to heart.'";
const PHONE_AGREE_LINE = "Yes. I think maybe it's time we do.";

const scenes = {
  door_closed: {
    id: "door_closed",
    image: "./assets/scenes/scene-01-door-closed.png",
    caption: "Let's see here...",
    hotspots: [
      {
        x: 40,
        y: 18,
        width: 20,
        height: 66,
        label: "Open the door",
        sound: "metal_door_open",
        target: "door_opening",
      },
    ],
  },
  door_opening: {
    id: "door_opening",
    image: "./assets/scenes/scene-02-door-opening.png",
    caption: "The school auditorium.",
    hotspots: [
      {
        x: 36,
        y: 18,
        width: 28,
        height: 68,
        label: "Walk through the door",
        sound: "steps_concrete",
        target: "auditorium_entry",
      },
    ],
  },
  auditorium_entry: {
    id: "auditorium_entry",
    image: "./assets/scenes/scene-03-auditorium-entry.png",
    caption: "I remember coming here most days.",
    hotspots: [
      {
        x: 50,
        y: 50,
        width: 50,
        height: 50,
        label: "Approach the ladder",
        sound: "steps_concrete",
        target: "near_ladder",
      },
    ],
  },
  near_ladder: {
    id: "near_ladder",
    image: "./assets/scenes/scene-04-near-ladder.png",
    caption: "It's a ladder alright.",
    hotspots: [
      {
        x: 40,
        y: 0,
        width: 22,
        height: 67,
        label: "Look up the ladder",
        target: "look_up_ladder",
      },
      {
        x: 64,
        y: 0,
        width: 22,
        height: 100,
        label: "Back to auditorium",
        sound: "steps_concrete",
        target: "auditorium_entry",
      },
    ],
  },
  look_up_ladder: {
    id: "look_up_ladder",
    image: "./assets/scenes/scene-05-look-up-ladder.png",
    caption: "Do I really climb this? That seems a little scary.",
    hotspots: [
      {
        x: 44,
        y: 8,
        width: 16,
        height: 84,
        label: "Climb up the ladder",
        sound: "ladder_clang",
        target: "first_door_outside",
      },
      {
        x: 52,
        y: 56,
        width: 44,
        height: 44,
        label: "Back to auditorium",
        sound: "steps_concrete",
        target: "auditorium_entry",
      },
    ],
  },
  first_door_outside: {
    id: "first_door_outside",
    image: "./assets/scenes/scene-06-first-door-locked.png",
    caption: "I don't remember if I met the person who lives here.",
    hotspots: [
      {
        x: 44,
        y: 28,
        width: 17,
        height: 58,
        label: "Try the first door",
        sound: "door_locked",
        target: "first_door_locked",
      },
      {
        x: 61,
        y: 0,
        width: 28,
        height: 50,
        label: "Climb up the ladder",
        sound: "ladder_clang",
        target: "second_door_outside",
      },
      {
        x: 61,
        y: 50,
        width: 28,
        height: 50,
        label: "Climb down the ladder",
        sound: "ladder_clang",
        target: "look_up_ladder",
      },
    ],
  },
  first_door_locked: {
    id: "first_door_locked",
    image: "./assets/scenes/scene-06-first-door-locked.png",
    caption: "It appears to be locked. Nobody's home, at any rate.",
    hotspots: [
      {
        x: 44,
        y: 28,
        width: 17,
        height: 58,
        label: "It appears to be locked. Nobody's home, at any rate",
        sound: "door_locked",
        target: "first_door_locked",
      },
      {
        x: 61,
        y: 0,
        width: 28,
        height: 50,
        label: "Climb up the ladder",
        sound: "ladder_clang",
        target: "second_door_outside",
      },
      {
        x: 61,
        y: 50,
        width: 28,
        height: 50,
        label: "Climb down the ladder",
        sound: "ladder_clang",
        target: "look_up_ladder",
      },
    ],
  },
  second_door_outside: {
    id: "second_door_outside",
    image: "./assets/scenes/scene-06-second-door-outside.png",
    caption: "This one seems more promising.",
    hotspots: [
      {
        x: 48,
        y: 40,
        width: 19,
        height: 38,
        label: "Open the second door",
        sound: "sliding_glass_open",
        target: "second_door_open",
      },
      {
        x: 63,
        y: 0,
        width: 30,
        height: 50,
        label: "Climb up the ladder",
        sound: "ladder_clang",
        target: "third_door_outside",
      },
      {
        x: 63,
        y: 50,
        width: 30,
        height: 50,
        label: "Climb down the ladder",
        sound: "ladder_clang",
        target: "first_door_outside",
      },
    ],
  },
  second_door_open: {
    id: "second_door_open",
    image: "./assets/scenes/scene-07-second-door-open.png",
    caption: "It slides right open.",
    hotspots: [
      {
        x: 20,
        y: 10,
        width: 60,
        height: 82,
        label: "Enter studio apartment",
        sound: "steps_carpet",
        target: "second_room_inside",
      },
    ],
  },
  second_room_inside: {
    id: "second_room_inside",
    image: "./assets/scenes/scene-08-inside-apartment.png",
    caption: "I used to live here, a long time ago. There's nothing here for me now.",
    hotspots: [
      {
        x: 0,
        y: 75,
        width: 100,
        height: 25,
        label: "Turn around",
        target: "second_room_turn_back",
      },
    ],
  },
  second_room_turn_back: {
    id: "second_room_turn_back",
    image: "./assets/scenes/scene-10-second-room-turn-back.png",
    caption:
      "I always feel so isolated up here. I remember I used to look out and feel like an astronaut up in space.",
    hotspots: [
      {
        x: 20,
        y: 10,
        width: 60,
        height: 82,
        label: "Step back out to the ladder",
        target: "second_room_lookout_play",
      },
    ],
  },
  second_room_lookout_play: {
    id: "second_room_lookout_play",
    image: "./assets/scenes/scene-10b-second-room-lookout-play.png",
    caption: "Huh? Is the play starting soon?",
    hotspots: [
      {
        x: 0,
        y: 0,
        width: 50,
        height: 100,
        label: "Step back out to the ladder",
        sound: "ladder_clang",
        target: "second_door_outside",
      },
    ],
  },
  third_door_outside: {
    id: "third_door_outside",
    image: "./assets/scenes/scene-11-third-door-outside.png",
    caption: "I don't think I've ever been up here.",
    hotspots: [
      {
        x: 51,
        y: 4,
        width: 15,
        height: 43,
        label: "Open the third door",
        sound: "sliding_glass_open",
        target: "third_door_open",
      },
      {
        x: 62,
        y: 50,
        width: 28,
        height: 50,
        label: "Climb down the ladder",
        sound: "ladder_clang",
        target: "second_door_outside",
      },
    ],
  },
  third_door_open: {
    id: "third_door_open",
    image: "./assets/scenes/scene-12-third-door-open.png",
    caption: "Whoever worked here cleared out a while ago.",
    hotspots: [
      {
        x: 34,
        y: 14,
        width: 38,
        height: 76,
        label: "Enter the office",
        sound: "steps_carpet",
        target: "third_office_main",
      },
    ],
  },
  third_office_main: {
    id: "third_office_main",
    image: "./assets/scenes/scene-13-third-office-main.png",
    caption:
      "It's so dusty in here. what's that weird hole in the wall?",
    hotspots: [
      {
        x: 18,
        y: 38,
        width: 30,
        height: 34,
        label: "Look at the phone",
        sound: "steps_carpet",
        target: "third_office_phone_close",
      },
      {
        x: 48,
        y: 22,
        width: 20,
        height: 42,
        label: "Approach the opening",
        sound: "steps_carpet",
        target: "third_office_opening_view",
      },
      {
        x: 0,
        y: 80,
        width: 100,
        height: 20,
        label: "Go back out to the ladder",
        sound: "ladder_clang",
        target: "third_door_outside",
      },
    ],
  },
  third_office_phone_close: {
    id: "third_office_phone_close",
    image: "./assets/scenes/scene-14-third-office-phone-close.png",
    caption: "Somebody could make a call with this.",
    hotspots: [
      {
        x: 0,
        y: 75,
        width: 100,
        height: 25,
        label: "Back to the office",
        sound: "steps_carpet",
        target: "third_office_main",
      },
    ],
  },
  third_office_phone_call: {
    id: "third_office_phone_call",
    image: "./assets/scenes/scene-24-phone-call-open.png",
    caption: PHONE_CALL_OPEN_LINE,
    hotspots: [
      {
        x: 22,
        y: 32,
        width: 42,
        height: 38,
        label: PHONE_CALL_OPEN_LINE,
        target: "third_office_phone_confrontation",
      },
    ],
  },
  third_office_phone_confrontation: {
    id: "third_office_phone_confrontation",
    image: "./assets/scenes/scene-25-phone-confrontation.png",
    caption: PHONE_CONFRONT_LINE,
    hotspots: [
      {
        x: 24,
        y: 14,
        width: 64,
        height: 72,
        label: PHONE_CONFRONT_LINE,
        target: "third_office_phone_peace",
      },
    ],
  },
  third_office_phone_peace: {
    id: "third_office_phone_peace",
    image: "./assets/scenes/scene-24-phone-call-open.png",
    caption: PHONE_PEACE_LINE,
    hotspots: [
      {
        x: 22,
        y: 32,
        width: 42,
        height: 38,
        label: PHONE_PEACE_LINE,
        target: "third_office_phone_agree_black",
      },
    ],
  },
  third_office_phone_agree_black: {
    id: "third_office_phone_agree_black",
    image: "./assets/scenes/scene-26-phone-agree-black.svg",
    caption: PHONE_AGREE_LINE,
    hotspots: [
      {
        x: 0,
        y: 75,
        width: 100,
        height: 25,
        label: "End",
        target: "third_office_phone_fin",
      },
    ],
  },
  third_office_phone_fin: {
    id: "third_office_phone_fin",
    image: "./assets/scenes/scene-27-phone-fin.svg",
    caption: "",
    hotspots: [],
  },
  third_office_opening_view: {
    id: "third_office_opening_view",
    image: "./assets/scenes/scene-15-third-office-opening-view.png",
    caption: "What the..?",
    hotspots: [
      {
        x: 0,
        y: 0,
        width: 43,
        height: 100,
        label: "Back to office",
        sound: "steps_carpet",
        target: "third_office_main",
      },
      {
        x: 57,
        y: 0,
        width: 43,
        height: 100,
        label: "Back to office",
        sound: "steps_carpet",
        target: "third_office_main",
      },
      {
        x: 43,
        y: 7,
        width: 14,
        height: 50,
        label: "Look out",
        target: "third_office_crack_mansion",
      },
      {
        x: 43,
        y: 62,
        width: 14,
        height: 34,
        label: "Look down",
        target: "third_office_crack_airport",
      },
    ],
  },
  third_office_crack_airport: {
    id: "third_office_crack_airport",
    image: "./assets/scenes/scene-16-third-office-crack-airport.png",
    caption: "It's the departure terminal for Delta.",
    hotspots: [
      {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        label: "Back",
        target: "third_office_opening_view",
      },
    ],
  },
  third_office_crack_mansion: {
    id: "third_office_crack_mansion",
    image: "./assets/scenes/scene-17-third-office-crack-mansion.png",
    caption: "But that's the Senator's house!",
    hotspots: [
      {
        x: 34,
        y: 4,
        width: 32,
        height: 36,
        label: "Look closer",
        target: "third_office_crack_senator_at_home",
      },
    ],
  },
  third_office_crack_senator_at_home: {
    id: "third_office_crack_senator_at_home",
    image: "./assets/scenes/scene-20b-third-office-senator-at-home.png",
    caption: "They're probably home right now.",
    hotspots: [
      {
        x: 0,
        y: 75,
        width: 100,
        height: 25,
        label: "Understand",
        sound: "boom",
        target: "third_office_crack_ramp",
      },
    ],
  },
  third_office_crack_ramp: {
    id: "third_office_crack_ramp",
    image: "./assets/scenes/scene-18-third-office-crack-ramp.png",
    caption: "What could be the meaning of this!",
    hotspots: [
      {
        x: 26,
        y: 22,
        width: 48,
        height: 48,
        label: "Understand",
        sound: "boom",
        target: "third_office_crack_dear_god_one",
      },
    ],
  },
  third_office_crack_dear_god_one: {
    id: "third_office_crack_dear_god_one",
    image: "./assets/scenes/scene-20-third-office-crack-dear-god-1.png",
    caption: "Dear God.",
    hotspots: [
      {
        x: 34,
        y: 4,
        width: 32,
        height: 36,
        label: "Understand",
        sound: "boom",
        target: "third_office_crack_dear_god_two",
      },
    ],
  },
  third_office_crack_dear_god_two: {
    id: "third_office_crack_dear_god_two",
    image: "./assets/scenes/scene-21-third-office-crack-dear-god-2.png",
    caption: "Dear God.",
    hotspots: [
      {
        x: 34,
        y: 4,
        width: 32,
        height: 36,
        label: "Understand",
        target: "third_office_crack_rumors",
      },
    ],
  },
  third_office_crack_rumors: {
    id: "third_office_crack_rumors",
    image: "./assets/scenes/scene-19-third-office-crack-rumors-black.svg",
    caption:
      "This can only mean one thing. The rumors are true.",
    hotspots: [
      {
        x: 0,
        y: 75,
        width: 100,
        height: 25,
        label: "Accept",
        target: "third_office_crack_baby",
      },
    ],
  },
  third_office_crack_baby: {
    id: "third_office_crack_baby",
    image: "./assets/scenes/scene-22-third-office-crack-baby.png",
    caption: "",
    hotspots: [
      {
        x: 40,
        y: 40,
        width: 22,
        height: 30,
        label: "Someone has to tell the Senator",
        target: "third_office_crack_post_baby",
      },
    ],
  },
  third_office_crack_post_baby: {
    id: "third_office_crack_post_baby",
    image: "./assets/scenes/scene-23-third-office-post-baby.png?v=62221e61",
    caption: "",
    hotspots: [
      {
        x: 0,
        y: 75,
        width: 100,
        height: 25,
        label: "I need to tell the Senator",
        sound: "steps_carpet",
        target: "third_office_main",
      },
    ],
  },
};

/** Stable 1-based frame index per scene (same order as below). */
const FRAME_IDS_ORDERED = [
  "door_closed",
  "door_opening",
  "auditorium_entry",
  "near_ladder",
  "look_up_ladder",
  "first_door_outside",
  "first_door_locked",
  "second_door_outside",
  "second_door_open",
  "second_room_inside",
  "second_room_turn_back",
  "second_room_lookout_play",
  "third_door_outside",
  "third_door_open",
  "third_office_main",
  "third_office_phone_close",
  "third_office_phone_call",
  "third_office_phone_confrontation",
  "third_office_phone_peace",
  "third_office_phone_agree_black",
  "third_office_phone_fin",
  "third_office_opening_view",
  "third_office_crack_airport",
  "third_office_crack_mansion",
  "third_office_crack_senator_at_home",
  "third_office_crack_ramp",
  "third_office_crack_dear_god_one",
  "third_office_crack_dear_god_two",
  "third_office_crack_rumors",
  "third_office_crack_baby",
  "third_office_crack_post_baby",
];

const FRAME_INDEX_BY_SCENE_ID = {};
FRAME_IDS_ORDERED.forEach((id, i) => {
  FRAME_INDEX_BY_SCENE_ID[id] = i + 1;
});

FRAME_IDS_ORDERED.forEach((id) => {
  if (scenes[id]) {
    scenes[id].frameIndex = FRAME_INDEX_BY_SCENE_ID[id];
  }
});

(() => {
  const keys = Object.keys(scenes);
  if (keys.length !== FRAME_IDS_ORDERED.length) {
    console.error(
      `FRAME_IDS_ORDERED length (${FRAME_IDS_ORDERED.length}) must equal scenes (${keys.length}).`
    );
  }
  const missing = keys.filter((k) => !FRAME_IDS_ORDERED.includes(k));
  const orphan = FRAME_IDS_ORDERED.filter((id) => !keys.includes(id));
  if (missing.length || orphan.length) {
    console.error("Frame index table mismatch:", { missing, orphan });
  }
})();

const sceneImage = document.getElementById("scene-image");
const sceneCaption = document.getElementById("scene-caption");
const hotspotLayer = document.getElementById("hotspot-layer");
const sceneFrame = document.querySelector(".scene-frame");
const keysFlagsOverlay = document.getElementById("keys-flags-overlay");
const finCredits = document.getElementById("fin-credits");

const AUDIO_ENABLED = true;

/** All SFX and wind peaks are scaled by this (50% quieter). */
const MASTER_VOLUME = 0.5;

const soundEffects = {
  metal_door_open: new Audio("./assets/audio/metal-door.mp3"),
  steps_concrete: new Audio("./assets/audio/concrete-walk.wav"),
  ladder_clang: new Audio("./assets/audio/ladder-climb.wav"),
  door_locked: new Audio("./assets/audio/door-locked.wav"),
  sliding_glass_open: new Audio("./assets/audio/slide-door.mp3"),
  steps_carpet: new Audio("./assets/audio/carpet-walk.wav"),
  wind_ambient: new Audio("./assets/audio/wind-up-high.wav"),
  boom: new Audio("./assets/audio/boom.mp3?v=2"),
  pick_up_phone: new Audio("./assets/audio/pick-up-phone.mp3"),
};

const WIND_SCENES = new Set([
  "second_room_turn_back",
  "second_room_lookout_play",
  "third_office_crack_baby",
]);
/** Wind peaks at half of browser full scale (independent of `MASTER_VOLUME`). */
const WIND_PEAK_VOLUME = 0.5;
const WIND_FADE_IN_MS = 250;
const WIND_FADE_OUT_MS = 500;

Object.entries(soundEffects).forEach(([key, audio]) => {
  audio.preload = "auto";
  if (key !== "wind_ambient") {
    audio.volume = MASTER_VOLUME;
  }
});

soundEffects.steps_concrete.playbackRate = 2;
soundEffects.ladder_clang.playbackRate = 1.6;
soundEffects.sliding_glass_open.playbackRate = 1.75;

soundEffects.wind_ambient.loop = true;
soundEffects.wind_ambient.volume = WIND_PEAK_VOLUME;

/**
 * Decode each SFX once, detect where non-silence begins, skip that many seconds on play.
 * Skips `wind_ambient` (large file; wind already fades in from silence).
 * Skips `steps_concrete` — RMS trim often lands mid–footfall (sounds like “thud click” instead of “click click”).
 */
const SOUNDS_SKIP_AUTO_TRIM = new Set([
  "wind_ambient",
  "steps_concrete",
  "pick_up_phone",
]);

/** `null` = not analyzed yet; number = seconds to skip from file start. */
const soundContentStartSec = Object.create(null);

async function computeContentStartForSound(soundKey) {
  if (SOUNDS_SKIP_AUTO_TRIM.has(soundKey)) {
    soundContentStartSec[soundKey] = 0;
    return;
  }
  if (!soundEffects[soundKey]) {
    return;
  }
  const el = soundEffects[soundKey];
  const url = new URL(el.src || el.currentSrc, window.location.href).href;
  const res = await fetch(url);
  if (!res.ok) {
    soundContentStartSec[soundKey] = 0;
    return;
  }
  const buf = await res.arrayBuffer();
  const copy = buf.slice(0);
  const ctx = new AudioContext();
  let audioBuf;
  try {
    audioBuf = await ctx.decodeAudioData(copy);
  } catch {
    soundContentStartSec[soundKey] = 0;
    await ctx.close();
    return;
  }
  await ctx.close();

  const sr = audioBuf.sampleRate;
  const winSamples = Math.max(256, Math.floor(sr * 0.03));
  const hopSamples = Math.max(128, Math.floor(sr * 0.005));
  const rmsThreshold = 0.014;

  for (let i = 0; i + winSamples <= audioBuf.length; i += hopSamples) {
    let maxRms = 0;
    for (let c = 0; c < audioBuf.numberOfChannels; c++) {
      const data = audioBuf.getChannelData(c);
      let sum = 0;
      for (let j = 0; j < winSamples; j++) {
        const s = data[i + j];
        sum += s * s;
      }
      maxRms = Math.max(maxRms, Math.sqrt(sum / winSamples));
    }
    if (maxRms > rmsThreshold) {
      soundContentStartSec[soundKey] = Math.max(0, i / sr - 0.002);
      return;
    }
  }
  soundContentStartSec[soundKey] = 0;
}

function primeSoundContentStarts() {
  Object.keys(soundEffects).forEach((k) => {
    if (soundContentStartSec[k] === undefined) {
      soundContentStartSec[k] = null;
    }
  });
  void Promise.all(
    Object.keys(soundEffects).map(async (k) => {
      if (soundContentStartSec[k] !== null) {
        return;
      }
      try {
        await computeContentStartForSound(k);
      } catch {
        soundContentStartSec[k] = 0;
      }
    }),
  );
}

const HOTSPOT_HOVER_MOVE_PX = 5;

let windFadeRafId = null;
let currentSceneId = "door_closed";
let secondApartmentEnteredSession = false;
let secondApartmentExitedAfterVisit = false;
/** Set when the player sees "fire the baby"; session-only (refresh clears). */
let fireBabyReachedSession = false;

let hotspotHoverCaptionGateActive = false;
let hotspotHoverMoveAccum = 0;

function fireBabyReached() {
  return fireBabyReachedSession;
}

function updateKeysFlagsOverlay() {
  const frameIdx = FRAME_INDEX_BY_SCENE_ID[currentSceneId];
  keysFlagsOverlay.textContent = [
    `Frame: ${frameIdx !== undefined ? frameIdx : "?"}`,
    `Been home: ${secondApartmentEnteredSession}`,
    `Learned truth: ${fireBabyReachedSession}`,
  ].join("\n");
}

function getHotspotsForScene(scene) {
  if (fireBabyReached() && scene.id === "third_office_phone_close") {
    return [
      {
        x: 0,
        y: 75,
        width: 100,
        height: 25,
        label: "Back to the office",
        sound: "steps_carpet",
        target: "third_office_main",
      },
      {
        x: 28,
        y: 22,
        width: 44,
        height: 32,
        label: "Call the Senator",
        sound: "pick_up_phone",
        target: "third_office_phone_call",
      },
    ];
  }
  return scene.hotspots;
}

function getEffectiveCaption(scene) {
  if (fireBabyReached()) {
    if (scene.id === "third_office_main") {
      return "Call the Senator";
    }
    if (scene.id === "third_office_phone_close") {
      return "I still remember his number";
    }
  }
  if (
    secondApartmentExitedAfterVisit &&
    SECOND_APT_MY_OLD_CAPTION_SCENES.has(scene.id)
  ) {
    return "My old apartment.";
  }
  return scene.caption;
}

function playSound(soundKey) {
  if (!AUDIO_ENABLED) {
    return;
  }
  const audio = soundEffects[soundKey];
  if (!audio) {
    return;
  }
  audio.volume = MASTER_VOLUME;
  const trim =
    typeof soundContentStartSec[soundKey] === "number"
      ? soundContentStartSec[soundKey]
      : 0;
  audio.currentTime = trim;
  audio.play().catch(() => {});
}

function cancelWindFade() {
  if (windFadeRafId !== null) {
    cancelAnimationFrame(windFadeRafId);
    windFadeRafId = null;
  }
}

function stopWindImmediate() {
  cancelWindFade();
  const wind = soundEffects.wind_ambient;
  wind.pause();
  wind.currentTime = 0;
  wind.volume = WIND_PEAK_VOLUME;
}

function fadeOutWindAmbient(durationMs = WIND_FADE_OUT_MS) {
  const wind = soundEffects.wind_ambient;
  if (wind.paused) {
    wind.volume = WIND_PEAK_VOLUME;
    return;
  }
  cancelWindFade();
  const startVol = wind.volume;
  const t0 = performance.now();
  function frame(t) {
    const elapsed = t - t0;
    const k = Math.min(1, elapsed / durationMs);
    wind.volume = startVol * (1 - k);
    if (k < 1) {
      windFadeRafId = requestAnimationFrame(frame);
    } else {
      windFadeRafId = null;
      wind.pause();
      wind.currentTime = 0;
      wind.volume = WIND_PEAK_VOLUME;
    }
  }
  windFadeRafId = requestAnimationFrame(frame);
}

function fadeInWindAmbient() {
  cancelWindFade();
  const wind = soundEffects.wind_ambient;
  const target = WIND_PEAK_VOLUME;
  wind.loop = true;
  wind.volume = 0;
  wind.currentTime = 0;
  const runRamp = () => {
    const t0 = performance.now();
    function frame(t) {
      const elapsed = t - t0;
      const k = Math.min(1, elapsed / WIND_FADE_IN_MS);
      wind.volume = target * k;
      if (k < 1) {
        windFadeRafId = requestAnimationFrame(frame);
      } else {
        windFadeRafId = null;
        wind.volume = target;
      }
    }
    windFadeRafId = requestAnimationFrame(frame);
  };
  wind
    .play()
    .then(runRamp)
    .catch(() => {
      windFadeRafId = null;
    });
}

function startWindAmbient() {
  fadeInWindAmbient();
}

function loadScene(sceneId) {
  const scene = scenes[sceneId];
  if (!scene) {
    return;
  }

  const fromSceneId = currentSceneId;

  if (scene.id === "second_room_inside") {
    secondApartmentEnteredSession = true;
  }

  if (
    scene.id === "second_door_outside" &&
    fromSceneId === "second_room_lookout_play" &&
    secondApartmentEnteredSession
  ) {
    secondApartmentExitedAfterVisit = true;
  }

  currentSceneId = scene.id;

  if (scene.id === "third_office_crack_baby") {
    fireBabyReachedSession = true;
  }

  if (scene.id !== "third_office_crack_baby") {
    sceneFrame.classList.remove("scene-frame--baby-fade-in");
    sceneImage.style.transition = "";
    sceneImage.style.opacity = "";
    sceneImage.src = scene.image;
  } else {
    sceneFrame.classList.add("scene-frame--baby-fade-in");
    sceneImage.style.transition = "none";
    sceneImage.style.opacity = "0";
    const runBabyFadeIn = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          sceneImage.style.transition = "opacity 6s ease-in";
          sceneImage.style.opacity = "1";
        });
      });
    };
    const onBabyImgLoad = () => {
      sceneImage.removeEventListener("load", onBabyImgLoad);
      runBabyFadeIn();
    };
    sceneImage.addEventListener("load", onBabyImgLoad);
    sceneImage.src = scene.image;
    if (sceneImage.complete) {
      sceneImage.removeEventListener("load", onBabyImgLoad);
      runBabyFadeIn();
    }
  }

  const caption = getEffectiveCaption(scene);
  sceneImage.alt = caption;
  sceneCaption.textContent = caption;

  if (scene.id === "third_office_phone_fin") {
    finCredits.hidden = false;
    finCredits.setAttribute("aria-hidden", "false");
  } else {
    finCredits.hidden = true;
    finCredits.setAttribute("aria-hidden", "true");
  }

  updateKeysFlagsOverlay();

  renderHotspots(getHotspotsForScene(scene));

  hotspotHoverCaptionGateActive = true;
  hotspotHoverMoveAccum = 0;
  if (scene.id === "first_door_locked") {
    hotspotHoverCaptionGateActive = false;
    hotspotHoverMoveAccum = 0;
  }

  if (AUDIO_ENABLED) {
    const enteringWind = WIND_SCENES.has(scene.id);
    const leavingWind = WIND_SCENES.has(fromSceneId) && !enteringWind;
    const stayingWind = WIND_SCENES.has(fromSceneId) && enteringWind;

    if (enteringWind) {
      if (!stayingWind) {
        startWindAmbient();
      }
    } else if (leavingWind) {
      fadeOutWindAmbient(WIND_FADE_OUT_MS);
    } else if (!WIND_SCENES.has(fromSceneId)) {
      stopWindImmediate();
    }
  }
}

function renderHotspots(hotspots) {
  hotspotLayer.innerHTML = "";

  hotspots.forEach((spot) => {
    const button = document.createElement("button");
    button.className = "hotspot";
    button.type = "button";
    button.setAttribute("aria-label", spot.label);
    button.dataset.hotspotLabel = spot.label;
    button.style.left = `${spot.x}%`;
    button.style.top = `${spot.y}%`;
    button.style.width = `${spot.width}%`;
    button.style.height = `${spot.height}%`;
    button.addEventListener("click", () => {
      if (spot.sound) {
        playSound(spot.sound);
      }
      loadScene(spot.target);
    });
    button.addEventListener("mouseenter", () => {
      if (hotspotHoverCaptionGateActive) {
        return;
      }
      sceneCaption.textContent = spot.label;
    });
    button.addEventListener("mouseleave", () => {
      sceneCaption.textContent = getEffectiveCaption(scenes[currentSceneId]);
    });
    hotspotLayer.appendChild(button);
  });
}

document.getElementById("restart-button").addEventListener("click", () => {
  loadScene("door_closed");
});

const gameShell = document.querySelector(".game-shell");
const toggleHitboxButton = document.getElementById("toggle-hitbox-button");
toggleHitboxButton.addEventListener("click", () => {
  const on = gameShell.classList.toggle("hitboxes-visible");
  toggleHitboxButton.setAttribute("aria-pressed", on ? "true" : "false");
});

const toggleKeysFlagsButton = document.getElementById(
  "toggle-keys-flags-button"
);
toggleKeysFlagsButton.addEventListener("click", () => {
  const on = gameShell.classList.toggle("keys-flags-visible");
  toggleKeysFlagsButton.setAttribute("aria-pressed", on ? "true" : "false");
  keysFlagsOverlay.setAttribute("aria-hidden", on ? "false" : "true");
  if (on) {
    updateKeysFlagsOverlay();
  }
});

window.addEventListener(
  "pointermove",
  (event) => {
    if (!hotspotHoverCaptionGateActive) {
      return;
    }
    hotspotHoverMoveAccum += Math.hypot(event.movementX, event.movementY);
    if (hotspotHoverMoveAccum < HOTSPOT_HOVER_MOVE_PX) {
      return;
    }
    hotspotHoverCaptionGateActive = false;
    const el = document.elementFromPoint(event.clientX, event.clientY);
    const hotspotEl = el?.closest?.("button.hotspot");
    const label = hotspotEl?.dataset?.hotspotLabel;
    if (label) {
      sceneCaption.textContent = label;
    }
  },
  { passive: true }
);

primeSoundContentStarts();
loadScene(currentSceneId);
