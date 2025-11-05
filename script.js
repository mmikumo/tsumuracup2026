    // ---------------------------------------------
    // 定数エリア（演出調整はここから行う）
    // ---------------------------------------------
    // ★ここを変更：速度・演出調整
    const BASE_SPEED = 1.2; // 基本速度（背景/他馬）
    const SPEED_UP_MULTIPLIER = 1.8; // SPEED UP倍率
    const SPEED_UP_DURATION_MS = 800; // 加速時間
    const COUNTDOWN_INTERVAL_MS = 700; // カウントダウン間隔
    const STAGE_RATIO_W = 705; // ステージ比（横）：仮想解像度基準幅
    const STAGE_RATIO_H = 900; // ステージ比（縦）：仮想解像度基準高
    const STAGE_BASE_W = 705; // ステージ基準幅（実測時のスケール算出用）
    const LAYOUT_BASE_W = 730; // レイアウト全体の基準幅
    const LAYOUT_BASE_H = 1560; // レイアウト全体の基準高さ
    const PREDICTION_TOP_ROW_COUNT = 4; // 予想画面の上段に並べる頭数
    const PREDICTION_BOTTOM_ROW_COUNT = 5; // 予想画面の下段に並べる頭数
    const PREDICTION_TOP_ROW_BOTTOM_OFFSET = 235; // 上段の馬の足元位置（ステージ下端からの距離）
    const PREDICTION_BOTTOM_ROW_BOTTOM_OFFSET = 74; // 下段の馬の足元位置（ステージ下端からの距離）
    const PREDICTION_TOP_ROW_LEFT_OFFSET = 80; // 上段左端のオフセット
    const PREDICTION_TOP_ROW_RIGHT_OFFSET = 80; // 上段右端のオフセット
    const PREDICTION_BOTTOM_ROW_LEFT_OFFSET = 80; // 下段左端のオフセット
    const PREDICTION_BOTTOM_ROW_RIGHT_OFFSET = 80; // 下段右端のオフセット
    const MAX_SELECTION_RANKS = 3; // 選択できる順位の数（1〜3着）
    
    // レース描画用の仮想解像度と演出用定数
    const RACE_VIRTUAL_WIDTH = 750;
    const RACE_VIRTUAL_HEIGHT = 1624;
    const RACE_STAGE_BASE_HEIGHT = 900;
    const RACE_BACKGROUND_GROUND_HEIGHT = 599;
    const RACE_BACKGROUND_SKY_HEIGHT = 304;
    const RACE_BACKGROUND_BLOOM_HEIGHT = 55;
    const RACE_BASE_SPEED_PER_SEC = 220; // 3.67px/frame を 60fps 想定で換算（レース全体をゆったり演出）
    const RACE_PARALLAX_SKY = 0.2;
    const RACE_PARALLAX_SAKU = 0.45;
    const RACE_PARALLAX_GROUND = 1.35; // 地面を馬より速く流すための倍率
    const RACE_OTHER_LANES = [560, 640];
    const RACE_PASS_MARGIN = 80;
    const RACE_GOAL_TARGET_RATIO = 0.5; // ゴール停止位置（ステージ幅に対する割合）
    const RACE_GOAL_RELATIVE_BLEND = 1; // ゴール演出時の相対速度補正（1で完全同期）
    const RACE_TIMELINE_SCALE = 2.4; // レース全体の時間を約2.4倍に引き伸ばす
    const RACE_MIN_RELATIVE_SPEED_PER_SEC = 60; // 地面との差分として確保したい最低相対速度（px/sec換算）
    const RACE_CAMERA_HERO_BIAS = 0.18; // ヒーロー寄りにカメラを寄せて押し出し演出を強化
    const RACE_SURGE_AMPLITUDE = 0.12; // ランダムな増減幅（スピード揺らぎ）
    const RACE_SURGE_FREQUENCY = 0.9; // 揺らぎの周波数（毎秒）
    const RACE_SPEEDUP_RELIEF = 0.35; // SPEED UP 中にライバルが受ける減速率
    const RACE_SPEEDUP_STRAIGHT_BONUS = 1.15; // 直線以降の追加倍率
    const RACE_SPEEDUP_STRAIGHT_RELIEF = 0.5; // 直線での相対的な減速幅
    const RACE_MIN_SPEED_FACTOR = 0.62;
    const RACE_MAX_SPEED_FACTOR = 1.2;
    const RACE_FINISH_OFFSETS = [0, 1.0, 1.6]; // 秒（1着→1秒後→2着→0.6秒後→3着）
    const RACE_FINISH_SPEED = 520; // px/秒（仮想解像度基準）
    const RACE_SECOND_HOLD_OFFSET = 160; // ヒーローから見た2着馬の待機オフセット（ステージ座標）
    const RACE_THIRD_HOLD_OFFSET = 210; // ヒーローから見た3着馬の待機オフセット（ステージ座標）
    const RACE_OTHER_PACK_BASE_OFFSET = 150; // 非選択馬の隊列基準オフセット
    const RACE_OTHER_PACK_COLUMN_SPACING = 70; // 隊列内の列間隔
    const RACE_OTHER_PACK_ROW_SPACING = 28; // 隊列内の列ごとの前後差
    const RACE_OTHER_PACK_FOLLOW_RATE = 6; // 隊列維持の追従速度（1秒あたり）
    const RACE_OTHER_PASS_DELAY_BASE_MS = 1200; // 非選択馬が隊列を離れる開始ディレイ
    const RACE_OTHER_PASS_DELAY_STEP_MS = 900; // 馬ごとの追加ディレイ（行単位）
    const RACE_OTHER_PASS_DELAY_COLUMN_MS = 320; // 列ごとの追加ディレイ
    const RACE_OTHER_PASS_DELAY_RANDOM_MS = 380; // 揺らぎ
    const RACE_OTHER_EXIT_FADE_MS = [220, 320]; // 画面外に抜けた後のフェード時間
    const RACE_TEKICHU_SRC = 'assets/race/tekichu.png';
    const RACE_DISTANCE_MARKER_SPACING = 160;
    const RACE_DISTANCE_MARKER_HEIGHT = 150;
    const RACE_DISTANCE_MARKER_WIDTH = 8;
    const RACE_DISTANCE_MARKER_COLOR = 'rgba(255, 255, 255, 0.7)';
    const RACE_DISTANCE_MARKER_BASE = 'rgba(255, 215, 120, 0.45)';
    const RACE_PHOTO_LINE_DURATION_MS = 180;
    const RACE_PHOTO_FLASH_DURATION_MS = 180;
    const RACE_PHOTO_FLASH_MAX_ALPHA = 0.28;
    
    const RACE_CLIMAX_DURATION = 2600;
    const RACE_CLIMAX_LEADIN = 180;
    const RACE_CLIMAX_ZOOM_FROM = 1.0;
    const RACE_CLIMAX_ZOOM_TO = 1.08;
    const RACE_CLIMAX_EXTRA_ZOOM = 0.04;
    const RACE_CLIMAX_PAN_X = 12;
    const RACE_CLIMAX_PULSE_FREQ = { front: 2.2, stalker: 2.6, closer: 3.0 };
    const RACE_CLIMAX_PULSE_AMP = { front: 0.03, stalker: 0.05, closer: 0.08 };
    const RACE_CLIMAX_FAKE_LEAD_PX = 8;
    const RACE_CLIMAX_FAKE_LEAD_TIME = [600, 1000];
    const RACE_CLIMAX_CONTENDER_TOTAL = 5;
    const RACE_CLIMAX_EXTRA_CONTENDERS = 2;
    const RACE_CLIMAX_CONTENDER_STICK_PX = 8;
    const RACE_CLIMAX_CONTENDER_FAKE_LEAD = [600, 1000];
    const RACE_CLIMAX_HERO_INNER_SHIFT = 10;
    const RACE_CLIMAX_RIVAL_OUTER_SHIFT = [4, 10];
    const RACE_CLIMAX_DUST_MULTIPLIER = 1.5;
    const RACE_CLIMAX_GROUND_BLUR_PX = 0.4;
    const RACE_CLIMAX_SHAKE = { amplitude: 1, duration: 120, repeats: 2 };
    const RACE_CLIMAX_HERO_BOOST = 0.16;
    const RACE_CLIMAX_OTHERS_RELIEF = 0.08;
    const RACE_CLIMAX_RELIEF_FADEOUT = 400;
    const RACE_CLIMAX_DISTANCE_TOGGLE_200 = 300;
    const RACE_CLIMAX_DISTANCE_TOGGLE_100 = 1200;
    const RACE_CLIMAX_DISTANCE_DURATION = 600;
    const RACE_CLIMAX_VERTICAL_BOB = 2;
    
    const RACE_DUST_BASE_RATE = 18;
    const RACE_DUST_MAX = 70;
    const RACE_DUST_LIFETIME = [400, 900];
    const RACE_DUST_SIZE = [6, 16];
    
    const RACE_HERO_ACCELERATION_PER_SEC = 360;
    const RACE_HERO_LEAD_APPROACH_PER_SEC = 220;
    const RACE_HERO_LEAD_MAX_DISTANCE = 140;
    const RACE_HERO_LEAD_DISTANCES = {
      default: 0,
      intro: 0,
      others: 16,
      straight: 28,
      climax: 40,
      third: 56,
      second: 72,
      lead: 90,
      goal: 110,
      finish: 126
    };
    const RACE_CAMERA_FOLLOW_ANCHOR = 0.45;
    const RACE_CAMERA_FOLLOW_STRENGTH = {
      default: 6,
      straight: 6.5,
      climax: 8,
      goal: 5,
      finish: 4
    };
    
    const RACE_STATE_SPEED_FACTORS = {
      intro: 0.72,
      others: 0.88,
      straight: 1.05,
      climax: 1.14,
      third: 1.08,
      second: 1.12,
      lead: 1.14,
      goal: 1.08,
      finish: 1.02
    };
    
    const RACE_PACE_MODIFIERS = {
      intro: { front: 1.0, stalker: 0.95, closer: 0.92 },
      others: { front: 0.98, stalker: 1.0, closer: 1.02 },
      straight: { front: 1.04, stalker: 1.08, closer: 1.12 },
      climax: { front: 1.08, stalker: 1.12, closer: 1.18 },
      third: { front: 1.02, stalker: 1.08, closer: 1.12 },
      second: { front: 1.04, stalker: 1.1, closer: 1.14 },
      lead: { front: 1.02, stalker: 1.06, closer: 1.08 },
      goal: { front: 1.0, stalker: 1.02, closer: 1.05 },
      finish: { front: 1.0, stalker: 1.0, closer: 1.0 }
    };
    
    const RACE_STATE_IMMERSION = {
      intro: { zoom: 0, panX: 0, groundBlur: 0, dust: 1, shake: 0 },
      others: { zoom: 0.01, panX: 4, groundBlur: 0.2, dust: 1.1, shake: 0 },
      straight: { zoom: 0.05, panX: 8, groundBlur: 0.25, dust: 1.25, shake: 1 },
      climax: { zoom: 0.08, panX: 12, groundBlur: 0.4, dust: 1.5, shake: 2 },
      third: { zoom: 0.03, panX: 8, groundBlur: 0.22, dust: 1.2, shake: 1 },
      second: { zoom: 0.04, panX: 10, groundBlur: 0.25, dust: 1.25, shake: 1 },
      lead: { zoom: 0.02, panX: 8, groundBlur: 0.2, dust: 1.1, shake: 0 },
      goal: { zoom: 0.015, panX: 6, groundBlur: 0.18, dust: 1.05, shake: 0 },
      finish: { zoom: 0, panX: 0, groundBlur: 0, dust: 1, shake: 0 }
    };
    
    const RACE_STRAIGHT_ZOOM_SCALE = 1 + (RACE_STATE_IMMERSION.straight?.zoom ?? 0);
    const RACE_STRAIGHT_ZOOM_DURATION_MS = 600;
    const RACE_STRAIGHT_TELOP_DURATION_MS = 1000;
    const RACE_STRAIGHT_TELOP_TEXT = '直線！';
    
    const RACE_LEG_TYPES = ['front', 'stalker', 'closer'];
    
    const RACE_STRAIGHT_STATE_KEY = 'straight';
    
    function scaledDuration(baseMs) {
      return Math.round(baseMs * RACE_TIMELINE_SCALE);
    }
    
    const RACE_STATE_SEQUENCE = [
      { key: 'intro', duration: scaledDuration(1000) },
      { key: 'others', duration: scaledDuration(3600) },
      { key: 'straight', duration: scaledDuration(1100) },
      { key: 'climax', duration: scaledDuration(RACE_CLIMAX_DURATION) },
      { key: 'third', duration: scaledDuration(1400) },
      { key: 'second', duration: scaledDuration(1400) },
      { key: 'lead', duration: scaledDuration(900) },
      { key: 'goal', duration: scaledDuration(1500) },
      { key: 'finish', duration: scaledDuration(1700) }
    ];
    
    const RACE_ASSET_PATHS = {
      sky: 'assets/haikei/sora.png',
      bloom: 'assets/haikei/saku.png',
      ground: 'assets/haikei/jimen.png',
      goal: 'assets/race/goal.svg'
    };
    
    const raceAssetCache = new Map();
    let raceAssetPromise = null;
    
    // ★ここを変更：順位王冠の画像（1〜3位の順）
    const crownImages = [
      'assets/haikei/crown1.png',
      'assets/haikei/crown2.png',
      'assets/haikei/crown3.png'
    ];
    
    // ---------------------------------------------
    // データ：馬情報（画像差し替えはここ）
    // ---------------------------------------------
    // ★ここを変更：馬情報（9頭）— img は実ファイルに差し替えやすいパスに
    // 透過PNGのサンプル（h1〜h3）は assets/horses/ 配下に配置済み。
    // 選択画面の名前プレートは assets/horse-names/ 配下の PNG を参照しています。
    // リザルト画面の名前ロゴは assets/result-names/ 配下の PNG を参照しています。
    // ★ここを変更：実際の馬イラストが揃ったら img を差し替えてください。
    const horses = [
      {
        id: 'h1',
        name: 'テレビオンエア',
        desc: '映像美術部で育成される注目のスピード派',
        img: 'assets/horses/h1.png',
        nameImg: 'assets/horse-names/name_tv.png',
        resultNameImg: 'assets/result-names/result_tv_onair.png'
      },
      {
        id: 'h2',
        name: 'ブタイステージ',
        desc: '総合舞台部で育成される見せ場を作る仕掛け上手',
        img: 'assets/horses/h1.png',
        nameImg: 'assets/horse-names/name_stage.png',
        resultNameImg: 'assets/result-names/result_stage.png'
      },
      {
        id: 'h3',
        name: 'プロモモーション',
        desc: 'プロモーション開発部で育成されるひらめきと脚力で勝負',
        img: 'assets/horses/h3.png',
        nameImg: 'assets/horse-names/name_planning.png',
        resultNameImg: 'assets/result-names/result_promo.png'
      },
      {
        id: 'h4',
        name: 'スペーススター',
        desc: 'スペース開発部で育成される安定感ある持久力',
        img: 'assets/horses/h1.png',
        nameImg: 'assets/horse-names/name_space.png',
        resultNameImg: 'assets/result-names/result_space_star.png'
      },
      {
        id: 'h5',
        name: 'アーキライン',
        desc: '設計管理室で育成される鋭いコース取りの技巧派',
        img: 'assets/horses/h1.png',
        nameImg: 'assets/horse-names/name_archi.png',
        resultNameImg: 'assets/result-names/result_archi_line.png'
      },
      {
        id: 'h6',
        name: 'デザインインパクト',
        desc: 'デザイン室で育成される美しいフォームが持ち味',
        img: 'assets/horses/h2.png',
        nameImg: 'assets/horse-names/name_design.png',
        resultNameImg: 'assets/result-names/result_design.png'
      },
      {
        id: 'h7',
        name: 'トウキョウクラウン',
        desc: '東京事業本部で育成される栄光狙う首都の覇者',
        img: 'assets/horses/h1.png',
        nameImg: 'assets/horse-names/name_tokyo_crown.png',
        resultNameImg: 'assets/result-names/result_tokyo_crown.png'
      },
      {
        id: 'h8',
        name: 'セッツビジュアル',
        desc: '圧倒的な存在感で魅了するカリスマホース',
        img: 'assets/horses/h1.png',
        nameImg: 'assets/horse-names/name_zetsu.png',
        resultNameImg: 'assets/result-names/result_zetsu_visual.png'
      },
      {
        id: 'h9',
        name: 'ツムラエンブレム',
        desc: '管理部で育成されるチームを束ねる要の馬',
        img: 'assets/horses/h1.png',
        nameImg: 'assets/horse-names/name_emblem.png',
        resultNameImg: 'assets/result-names/result_tsumu_emblem.png'
      }
    ];
    
    const PREDICTION_DISPLAY_ORDER = Object.freeze([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'h7',
      'h8',
      'h9'
    ]);
    // ---------------------------------------------
    // DOM 取得（頻出要素はまとめておく）
    // ---------------------------------------------
    const gameViewport = document.querySelector('.game-viewport');
    const gameCanvasInner = document.querySelector('.game-canvas-inner');
    const app = document.querySelector('.app');
    const stageWrapper = document.querySelector('.stage-wrapper');
    const stage = document.querySelector('.stage');
    const stageControls = document.querySelector('.stage-controls');
    const screens = document.querySelectorAll('.screen');
    const horseGrid = document.querySelector('.horse-grid');
    const titleRunnerLayer = document.querySelector('.title-runner-layer');
    const previewNameImg = document.querySelector('.predict-preview-name');
    const selectionSlots = Array.from(document.querySelectorAll('.selection-slot'));
    const selectButton = document.querySelector('[data-action="selectHorse"]');
    const controlGroups = document.querySelectorAll('.control-group');
    const startButton = document.querySelector('[data-action="startRace"]');
    const speedButton = document.querySelector('[data-action="speedUp"]');
    const resultList = document.querySelector('.result-list');
    const countdownEl = document.querySelector('.countdown');
    const raceCanvas = document.querySelector('.race-canvas');
    const raceTrack = document.querySelector('.race-track');
    const raceScrollViewport = document.querySelector('.race-scroll');
    const raceScrollInner = document.querySelector('.race-scroll-inner');
    const raceLayerSky = document.querySelector('.race-layer--sky');
    const raceLayerBloom = document.querySelector('.race-layer--saku');
    const raceLayerGround = document.querySelector('.race-layer--ground');
    const raceSpeedEffectsRoot = document.querySelector('.race-speed-effects');
    const raceStageEl = document.querySelector('.race-stage');
    const raceStraightTelopEl = document.querySelector('.race-straight-telop');
    const racePhotoFlashEl = document.querySelector('.race-photo-flash');
    const raceDistanceTelops = {
      200: document.querySelector('.race-distance-telop[data-distance="200"]'),
      100: document.querySelector('.race-distance-telop[data-distance="100"]')
    };
    const racePredictionPanel = document.querySelector('.race-prediction-panel');
    const racePredictionBg = document.querySelector('.race-prediction-bg');
    const racePredictionList = document.querySelector('.race-prediction-list');
    const racePredictionHorseImgs = [];
    const racePredictionTekichuImgs = [];
    
    const howtoModal = document.getElementById('howto-modal');
    const backdrop = document.querySelector('.modal-backdrop');
    
    const SILHOUETTE_CANDIDATES = [
      'assets/horses/silhouette.svg',
      'assets/horses/silhouette.png'
    ];
    let placeholderHorseSrc = SILHOUETTE_CANDIDATES[SILHOUETTE_CANDIDATES.length - 1];
    
    function createPlaceholderHorse(idSuffix = 'fallback') {
      return {
        id: `placeholder-${idSuffix}`,
        name: '仮ホース',
        desc: 'データ未設定時に表示される仮のホース',
        img: placeholderHorseSrc,
        nameImg: '',
        resultNameImg: ''
      };
    }
    
    const HORSE_ANIMATION_INTERVAL_MS = Object.freeze({
      grid: 140,
      race: 120,
      result: 140
    });
    
    const SELECT_ARROW_SOURCES = Object.freeze([
      'assets/ui/arrow_select.svg',
      'assets/ui/arrow_select.png'
    ]);

    const SPEED_EFFECT_SOURCES = Object.freeze({
      star: ['assets/effects/speed_star.svg', 'assets/effects/speed_star.png'],
      line: ['assets/effects/speed_line.svg', 'assets/effects/speed_line.png']
    });

    const SPEED_EFFECT_INTERVAL_MS = 180;
    const SPEED_EFFECT_STAR_DURATION_MS = 1100;
    const SPEED_EFFECT_LINE_DURATION_MS = 820;
    const SPEED_EFFECT_VERTICAL_PADDING = 24;
    
    const horseById = new Map(horses.map((horse) => [horse.id, horse]));
    const titleRunnerImages = new Map();
    const horseFrameCache = new Map();
    const horseFramePromises = new Map();
    const horseImageRegistry = new Map();
    const horseAnimationStates = new Map();
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;
    
    const slotImages = selectionSlots.map((slot) => slot.querySelector('.slot-horse-img'));
    const slotClearButtons = selectionSlots.map((slot) => slot.querySelector('.slot-clear'));
    
    function initHorseFrameDetection() {
      horses.forEach((horse) => ensureHorseFrames(horse));
    }
    
    function setupAnimationPreferenceListeners() {
      if (prefersReducedMotion) {
        const handleChange = (event) => {
          if (event.matches) {
            stopAllHorseAnimationLoops();
            horseImageRegistry.forEach((set, horseId) => {
              updateRegisteredHorseImages(horseId);
            });
            if (raceController) {
              raceController.stopSpeedEffects();
            }
          } else {
            refreshAnimationsForCurrentScreen();
            if (raceController && raceController.speedBoostRemaining > 0) {
              raceController.startSpeedEffects();
            }
          }
        };
        if (prefersReducedMotion.addEventListener) {
          prefersReducedMotion.addEventListener('change', handleChange);
        } else if (prefersReducedMotion.addListener) {
          prefersReducedMotion.addListener(handleChange);
        }
        if (prefersReducedMotion.matches) {
          stopAllHorseAnimationLoops();
        }
      }
    
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          stopAllHorseAnimationLoops();
          raceController?.stopSpeedEffects();
        } else {
          refreshAnimationsForCurrentScreen();
          if (raceController && raceController.speedBoostRemaining > 0) {
            raceController.startSpeedEffects();
          }
        }
      });
    }
    
    function isHorseAnimationEnabled() {
      return !prefersReducedMotion || !prefersReducedMotion.matches;
    }
    
    function ensureHorseFrames(horse) {
      if (!horse || !horse.id) {
        return { stop: placeholderHorseSrc, run: placeholderHorseSrc };
      }
      if (horseFrameCache.has(horse.id)) {
        const cached = horseFrameCache.get(horse.id);
        cached.stop = cached.stop || horse.img || placeholderHorseSrc;
        cached.run = cached.run || cached.stop;
        return cached;
      }
      const fallback = horse.img || placeholderHorseSrc;
      const entry = { stop: fallback, run: fallback };
      horseFrameCache.set(horse.id, entry);
      const promise = detectHorseFramesAsync(horse, entry)
        .catch((error) => {
          console.warn('[horse] フレーム検出に失敗しました', horse.id, error);
        })
        .finally(() => {
          updateRegisteredHorseImages(horse.id);
          refreshTitleRunnerImage(horse.id);
        });
      horseFramePromises.set(horse.id, promise);
      return entry;
    }
    
    async function detectHorseFramesAsync(horse, entry) {
      const candidates = getHorseFrameCandidates(horse);
      for (const candidate of candidates) {
        const [stopSrc, stopImage] = await attemptImageLoad(candidate.stop);
        const [runSrc, runImage] = await attemptImageLoad(candidate.run);
        if (stopImage && runImage) {
          entry.stop = stopSrc;
          entry.run = runSrc;
          return entry;
        }
      }
      entry.stop = entry.stop || horse.img || placeholderHorseSrc;
      entry.run = entry.run || entry.stop;
      return entry;
    }
    
    function getHorseFrameCandidates(horse) {
      const bases = new Set();
      if (horse?.id) {
        bases.add(`assets/horses/${horse.id}`);
      }
      if (horse?.img) {
        const base = horse.img.replace(/\.(png|svg)$/i, '');
        bases.add(base);
      }
      const pairs = [];
      bases.forEach((base) => {
        pairs.push({ stop: `${base}_stop.svg`, run: `${base}_run.svg` });
        pairs.push({ stop: `${base}_stop.png`, run: `${base}_run.png` });
      });
      return pairs;
    }
    
    function attemptImageLoad(src) {
      return new Promise((resolve) => {
        if (!src) {
          resolve([src, null]);
          return;
        }
        const image = new Image();
        image.decoding = 'async';
        image.onload = () => resolve([src, image]);
        image.onerror = () => resolve([src, null]);
        image.src = src;
      });
    }
    
    function getHorseFramesForId(horseId) {
      if (!horseId) {
        return { stop: placeholderHorseSrc, run: placeholderHorseSrc };
      }
      if (!horseFrameCache.has(horseId)) {
        const horse = horseById.get(horseId);
        if (horse) {
          return ensureHorseFrames(horse);
        }
        return { stop: placeholderHorseSrc, run: placeholderHorseSrc };
      }
      const entry = horseFrameCache.get(horseId);
      const stop = entry.stop || entry.run || placeholderHorseSrc;
      const run = entry.run || stop;
      return { stop, run };
    }
    
    function registerHorseImageElement(horseId, imgEl) {
      if (!horseId || !imgEl) return;
      ensureHorseFrames(horseById.get(horseId));
      imgEl.dataset.horseId = horseId;
      let set = horseImageRegistry.get(horseId);
      if (!set) {
        set = new Set();
        horseImageRegistry.set(horseId, set);
      }
      set.add(imgEl);
    }
    
    function unregisterHorseImageElement(imgEl) {
      if (!imgEl) return;
      const horseId = imgEl.dataset.horseId;
      if (horseId && horseImageRegistry.has(horseId)) {
        const set = horseImageRegistry.get(horseId);
        set.delete(imgEl);
        if (set.size === 0) {
          horseImageRegistry.delete(horseId);
        }
      } else {
        horseImageRegistry.forEach((set, key) => {
          if (set.delete(imgEl) && set.size === 0) {
            horseImageRegistry.delete(key);
          }
        });
      }
      delete imgEl.dataset.horseId;
      delete imgEl.dataset.frameSrc;
    }
    
    function unregisterHorseImagesIn(container) {
      if (!container) return;
      container.querySelectorAll('img[data-horse-id]').forEach((img) => {
        stopTwoFrameLoop(img);
        unregisterHorseImageElement(img);
      });
    }
    
    function updateRegisteredHorseImages(horseId) {
      const set = horseImageRegistry.get(horseId);
      if (!set || !set.size) return;
      const frames = getHorseFramesForId(horseId);
      set.forEach((imgEl) => {
        if (!horseAnimationStates.has(imgEl)) {
          setImageSrc(imgEl, frames.stop);
        }
      });
    }
    
    function setImageSrc(imgEl, src) {
      if (!imgEl || !src) return;
      if (imgEl.dataset.frameSrc === src) return;
      imgEl.dataset.frameSrc = src;
      imgEl.src = src;
    }
    
    function startTwoFrameLoop(imgEl, horseId, intervalMs) {
      if (!imgEl || !horseId) return;
      const frames = getHorseFramesForId(horseId);
      registerHorseImageElement(horseId, imgEl);
      stopTwoFrameLoop(imgEl);
      setImageSrc(imgEl, frames.stop);
      if (!isHorseAnimationEnabled()) {
        return;
      }
      const interval = Math.max(16, intervalMs || HORSE_ANIMATION_INTERVAL_MS.grid);
      const state = {
        horseId,
        frames,
        interval,
        isRun: false
      };
      state.timer = window.setInterval(() => {
        state.isRun = !state.isRun;
        setImageSrc(imgEl, state.isRun ? state.frames.run : state.frames.stop);
      }, interval);
      horseAnimationStates.set(imgEl, state);
    }
    
    function stopTwoFrameLoop(imgEl) {
      if (!imgEl) return;
      const state = horseAnimationStates.get(imgEl);
      if (state && state.timer) {
        clearInterval(state.timer);
      }
      if (state) {
        const frames = getHorseFramesForId(state.horseId);
        setImageSrc(imgEl, frames.stop);
        horseAnimationStates.delete(imgEl);
        return;
      }
      if (imgEl.dataset && imgEl.dataset.horseId) {
        const frames = getHorseFramesForId(imgEl.dataset.horseId);
        setImageSrc(imgEl, frames.stop);
      }
    }
    
    function stopAllHorseAnimationLoops() {
      horseAnimationStates.forEach((state, imgEl) => {
        if (state?.timer) {
          clearInterval(state.timer);
        }
        const frames = getHorseFramesForId(state.horseId);
        setImageSrc(imgEl, frames.stop);
      });
      horseAnimationStates.clear();
    }
    
    function refreshAnimationsForCurrentScreen() {
      if (currentScreen === 'predict') {
        refreshSelectionSlotAnimations();
        refreshCardAnimations();
      } else if (currentScreen === 'result') {
        startResultHorseAnimations();
      }
    }
    
    function refreshCardAnimations() {
      const shouldAnimate = currentScreen === 'predict' && isHorseAnimationEnabled();
      document.querySelectorAll('.horse-card').forEach((card) => {
        const horseId = card.dataset.horseId;
        const img = card.querySelector('.horse-thumb-img');
        if (!horseId || !img) return;
        if (
          shouldAnimate &&
          (selectedOrder.includes(horseId) || horseId === previewHorseId)
        ) {
          startTwoFrameLoop(img, horseId, HORSE_ANIMATION_INTERVAL_MS.grid);
        } else {
          stopTwoFrameLoop(img);
          registerHorseImageElement(horseId, img);
          const frames = getHorseFramesForId(horseId);
          setImageSrc(img, frames.stop);
        }
      });
    }
    
    function refreshSelectionSlotAnimations() {
      const shouldAnimate = currentScreen === 'predict' && isHorseAnimationEnabled();
      selectionSlots.forEach((slot, index) => {
        const img = slotImages[index];
        if (!img) return;
        const horseId = selectedOrder[index];
        if (horseId && shouldAnimate) {
          startTwoFrameLoop(img, horseId, HORSE_ANIMATION_INTERVAL_MS.grid);
        } else if (horseId) {
          stopTwoFrameLoop(img);
          registerHorseImageElement(horseId, img);
          const frames = getHorseFramesForId(horseId);
          setImageSrc(img, frames.stop);
        } else {
          stopTwoFrameLoop(img);
        }
      });
      refreshCardAnimations();
    }
    
    function startResultHorseAnimations() {
      if (!resultList) return;
      const shouldAnimate = currentScreen === 'result' && isHorseAnimationEnabled();
      const activeIds = selectedOrder.filter(Boolean).slice(0, MAX_SELECTION_RANKS);
      resultList.querySelectorAll('.result-item .result-horse').forEach((img) => {
        const horseId = img.dataset.horseId;
        if (!horseId) return;
        if (shouldAnimate && activeIds.includes(horseId)) {
          startTwoFrameLoop(img, horseId, HORSE_ANIMATION_INTERVAL_MS.result);
        } else {
          stopTwoFrameLoop(img);
          registerHorseImageElement(horseId, img);
          const frames = getHorseFramesForId(horseId);
          setImageSrc(img, frames.stop);
        }
      });
    }
    
    // ---------------------------------------------
    // ステート（状態を管理）
    // ---------------------------------------------
    let currentScreen = 'title';
    let selectedOrder = Array(MAX_SELECTION_RANKS).fill(null); // 選択済みの馬IDを順位ごとに格納
    let previewHorseId = null; // 現在プレビュー中の馬ID
    let currentPreviewCard = null;
    let raceController = null; // レース制御クラスのインスタンス
    
    // ---------------------------------------------
    // 初期化処理（画面ロード時に呼ぶ）
    // ---------------------------------------------
    initStageSizing();
    initRacePredictionPanelAspect();
    initHorseFrameDetection();
    renderHorseCards();
    initTitleRunners();
    resetPreviewPanel();
    updateSelectionSlots();
    updateSelectButton();
    updateStartButton();
    updateControls(currentScreen);
    setupGlobalListeners();
    setupAnimationPreferenceListeners();
    initCompactMode();
    updateRaceBackdropParallax(0);
    detectSilhouetteSource().catch((error) => {
      console.warn('[predict] silhouette detection failed', error);
    });
    
    // ---------------------------------------------
    // レイアウト調整：ステージサイズを仮想画面幅に合わせて更新
    // ---------------------------------------------
    function initStageSizing() {
      if (!stage) return;
    
      const update = () => {
        requestAnimationFrame(applyStageScale);
      };
    
      applyStageScale();
    
      window.addEventListener('resize', update, { passive: true });
      if (window.visualViewport?.addEventListener) {
        window.visualViewport.addEventListener('resize', update, { passive: true });
      }
    }
    
    function initRacePredictionPanelAspect() {
      if (!racePredictionPanel || !racePredictionBg) return;
    
      const applyAspectRatio = () => {
        if (!racePredictionBg.naturalWidth || !racePredictionBg.naturalHeight) return;
        const ratio = racePredictionBg.naturalWidth / racePredictionBg.naturalHeight;
        racePredictionPanel.style.setProperty('--race-panel-aspect', ratio.toFixed(4));
      };
    
      if (racePredictionBg.complete) {
        applyAspectRatio();
      } else {
        racePredictionBg.addEventListener('load', applyAspectRatio, { once: true });
      }
    }
    
    function applyStageScale() {
      const root = document.documentElement;
      if (!root) return;
    
    const availableWidth =
      window.visualViewport?.width ?? window.innerWidth ?? document.documentElement.clientWidth ?? LAYOUT_BASE_W;
    const availableHeight =
      window.visualViewport?.height ?? window.innerHeight ?? document.documentElement.clientHeight ?? LAYOUT_BASE_H;
    if (!availableWidth || !availableHeight) {
      return;
    }

    const scaleByWidth = availableWidth / LAYOUT_BASE_W;
    const scaleByHeight = availableHeight / LAYOUT_BASE_H;
      const scale = Math.max(0, Math.min(scaleByWidth, scaleByHeight));
    
      const stageWidth = STAGE_BASE_W * scale;
      const stageHeight = STAGE_RATIO_H * scale;
      const layoutWidth = LAYOUT_BASE_W * scale;
      const layoutHeight = LAYOUT_BASE_H * scale;
    
      root.style.setProperty('--stage-scale-factor', scale.toFixed(4));
    root.style.setProperty('--stage-actual-width', `${stageWidth}px`);
    root.style.setProperty('--stage-actual-height', `${stageHeight}px`);
    root.style.setProperty('--layout-actual-width', `${layoutWidth}px`);
    root.style.setProperty('--layout-actual-height', `${layoutHeight}px`);
    updateRaceBackdropParallax(raceController?.panX ?? 0);
  }

  function updateRaceBackdropParallax(panX = 0) {
    const clamped = Math.min(0, Number.isFinite(panX) ? panX : 0);
    if (raceLayerSky) {
      raceLayerSky.style.backgroundPositionX = `${(clamped * RACE_PARALLAX_SKY).toFixed(2)}px`;
    }
    if (raceLayerBloom) {
      raceLayerBloom.style.backgroundPositionX = `${(clamped * RACE_PARALLAX_SAKU).toFixed(2)}px`;
    }
    if (raceLayerGround) {
      raceLayerGround.style.backgroundPositionX = `${(clamped * RACE_PARALLAX_GROUND).toFixed(2)}px`;
    }
  }
    
    function initCompactMode() {
      const mq = window.matchMedia('(max-width: 420px)');
    
      const apply = () => {
        document.body.classList.toggle('is-compact', mq.matches);
        requestAnimationFrame(applyStageScale);
      };
    
      if (mq.addEventListener) {
        mq.addEventListener('change', apply);
      } else if (mq.addListener) {
        mq.addListener(apply);
      }
    
      window.addEventListener('resize', apply, { passive: true });
      apply();
    }
    
    // ---------------------------------------------
    // 馬カード一覧の描画
    // ---------------------------------------------
    function renderHorseCards() {
      if (!horseGrid) return;
      horseGrid.innerHTML = '';
      const placements = computeHorsePlacements();
    
      PREDICTION_DISPLAY_ORDER.forEach((horseId, index) => {
        const horse = horseById.get(horseId) || createPlaceholderHorse(horseId);
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'horse-card';
        card.setAttribute('aria-label', `${horse.name}を選ぶ`);
        card.dataset.horseId = horse.id;
        card.dataset.slotIndex = String(index);
    
        const placement = placements.get(horse.id);
        if (placement) {
          card.style.setProperty('--card-left', placement.left.toFixed(4));
          card.style.setProperty('--card-bottom', placement.bottom.toFixed(4));
          card.dataset.row = placement.row;
        }
    
        const thumb = document.createElement('div');
        thumb.className = 'horse-thumb';
    
        const thumbImg = document.createElement('img');
        thumbImg.className = 'horse-thumb-img';
        thumbImg.alt = `${horse.name}のイラスト`;
        thumbImg.loading = 'lazy';
        thumbImg.decoding = 'async';
        const frames = getHorseFramesForId(horse.id);
        setImageSrc(thumbImg, frames.stop);
        registerHorseImageElement(horse.id, thumbImg);
    
        thumb.append(thumbImg);
        const srText = document.createElement('span');
        srText.className = 'sr-only';
        srText.textContent = horse.name;
    
        const arrow = createArrowElement();
    
        card.append(thumb, srText, arrow);
        horseGrid.append(card);
      });
    }
    
    function createArrowElement() {
      const wrapper = document.createElement('div');
      wrapper.className = 'floating-arrow';
      const img = document.createElement('img');
      img.className = 'floating-arrow-img';
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      setArrowImageSource(img);
      wrapper.append(img);
      return wrapper;
    }
    
    function setArrowImageSource(imgEl, index = 0) {
      if (!imgEl || !SELECT_ARROW_SOURCES.length) return;
      const applySource = (sourceIndex) => {
        if (sourceIndex >= SELECT_ARROW_SOURCES.length) {
          imgEl.onerror = null;
          return;
        }
        imgEl.dataset.arrowIndex = String(sourceIndex);
        imgEl.onerror = () => {
          applySource(sourceIndex + 1);
        };
        imgEl.onload = () => {
          imgEl.onerror = null;
          imgEl.onload = null;
        };
        imgEl.src = SELECT_ARROW_SOURCES[sourceIndex];
      };
      applySource(index);
    }

    function setSpeedEffectImageSource(imgEl, type, index = 0) {
      if (!imgEl) return;
      const candidates = SPEED_EFFECT_SOURCES[type] || [];
      if (!candidates.length) return;
      const apply = (sourceIndex) => {
        if (sourceIndex >= candidates.length) {
          imgEl.onerror = null;
          return;
        }
        imgEl.onerror = () => apply(sourceIndex + 1);
        imgEl.onload = () => {
          imgEl.onerror = null;
          imgEl.onload = null;
        };
        imgEl.src = candidates[sourceIndex];
      };
      apply(index);
    }
    
    function initTitleRunners() {
      if (!titleRunnerLayer) return;
      titleRunnerLayer.innerHTML = '';
      titleRunnerImages.clear();
      const laneOffsets = [520, 540, 560, 580, 600, 620, 640, 660, 680];
      PREDICTION_DISPLAY_ORDER.forEach((horseId, index) => {
        const horse = horseById.get(horseId) || createPlaceholderHorse(horseId);
        const runner = document.createElement('div');
        runner.className = 'title-runner';
        runner.style.setProperty('--runner-top', `${laneOffsets[index % laneOffsets.length]}`);
        const duration = 16 + Math.random() * 6;
        runner.style.setProperty('--runner-duration', `${duration.toFixed(2)}s`);
        const delay = Math.random() * duration;
        runner.style.setProperty('--runner-delay', `${delay.toFixed(2)}s`);
    
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.decoding = 'async';
        img.alt = `${horse.name}が走っています`;
        const frames = getHorseFramesForId(horse.id);
        setImageSrc(img, frames.run || frames.stop);
        titleRunnerImages.set(horse.id, img);
    
        const shadow = document.createElement('div');
        shadow.className = 'runner-shadow';
    
        runner.append(img, shadow);
        titleRunnerLayer.append(runner);
        refreshTitleRunnerImage(horse.id);
      });
    }
    
    function refreshTitleRunnerImage(horseId) {
      if (!horseId) return;
      const img = titleRunnerImages.get(horseId);
      if (!img) return;
      const frames = getHorseFramesForId(horseId);
      const preferred = frames.run || frames.stop;
      if (preferred) {
        setImageSrc(img, preferred);
      }
    }
    
    function computeHorsePlacements() {
      const placements = new Map();
      const stageWidth = STAGE_RATIO_W;
      const topSpan = stageWidth - PREDICTION_TOP_ROW_LEFT_OFFSET - PREDICTION_TOP_ROW_RIGHT_OFFSET;
      const bottomSpan = stageWidth - PREDICTION_BOTTOM_ROW_LEFT_OFFSET - PREDICTION_BOTTOM_ROW_RIGHT_OFFSET;
      const topGap =
        PREDICTION_TOP_ROW_COUNT > 1
          ? topSpan / (PREDICTION_TOP_ROW_COUNT - 1)
          : 0;
      const bottomGap =
        PREDICTION_BOTTOM_ROW_COUNT > 1
          ? bottomSpan / (PREDICTION_BOTTOM_ROW_COUNT - 1)
          : 0;

      PREDICTION_DISPLAY_ORDER.forEach((horseId, index) => {
        let left = 0;
        let bottom = 0;
        let row = 'bottom';
        if (index < PREDICTION_TOP_ROW_COUNT) {
          left = PREDICTION_TOP_ROW_LEFT_OFFSET + topGap * index;
          bottom = PREDICTION_TOP_ROW_BOTTOM_OFFSET;
          row = 'top';
        } else {
          const bottomIndex = index - PREDICTION_TOP_ROW_COUNT;
          left = PREDICTION_BOTTOM_ROW_LEFT_OFFSET + bottomGap * bottomIndex;
          bottom = PREDICTION_BOTTOM_ROW_BOTTOM_OFFSET;
        }
        placements.set(horseId, { left, bottom, row });
      });

      return placements;
    }
    
    // ---------------------------------------------
    // 共通イベントリスナーをセット
    // ---------------------------------------------
    function setupGlobalListeners() {
      document.addEventListener('click', handleClick, { passive: false });
      document.addEventListener('keydown', handleKeyDown);
    }
    
    function handleClick(event) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
    
      const actionTarget = target.closest('[data-action]');
      if (actionTarget instanceof HTMLElement) {
        event.preventDefault();
        const actionName = actionTarget.dataset.action || '';
        if (actionName) {
          handleAction(actionName, actionTarget);
        }
        return;
      }
    
      const horseCard = target.closest('.horse-card');
      if (horseCard instanceof HTMLElement) {
        event.preventDefault();
        setPreviewHorse(horseCard.dataset.horseId);
        return;
      }
    
      const removeBtn = target.closest('[data-remove-rank]');
      if (removeBtn instanceof HTMLElement) {
        event.preventDefault();
        const rank = Number(removeBtn.dataset.removeRank);
        if (!Number.isNaN(rank)) {
          removeSelectionAt(rank);
        }
      }
    }
    
    function handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        const active = document.activeElement;
        if (active instanceof HTMLElement) {
          const actionTarget = active.closest('[data-action]');
          if (actionTarget instanceof HTMLElement) {
            event.preventDefault();
            const actionName = actionTarget.dataset.action || '';
            if (actionName) {
              handleAction(actionName, actionTarget);
            }
            return;
          }
    
          if (active.classList.contains('horse-card')) {
            event.preventDefault();
            setPreviewHorse(active.dataset.horseId);
          }
        }
      }
    
      if (event.key === 'Escape') {
        closeModal();
      }
    }
    
    function handleAction(action, target) {
      if (!action) return;
      switch (action) {
        case 'toPredict':
          switchScreen('predict');

          // 予想画面に入ったら必ず h1 をプレビュー状態にする
          setPreviewHorse('h1');
          break;
        case 'openHowTo':
          openModal(howtoModal);
          break;
        case 'closeModal':
          closeModal();
          break;
        case 'selectHorse':
          confirmPreviewSelection();
          break;
        case 'backToTitle':
          clearSelections();
          switchScreen('title');
          break;
        case 'clearSelection':
          clearSelections();
          break;
        case 'startRace':
          startRace();
          break;
        case 'speedUp':
          raceController?.triggerSpeedUp();
          break;
        case 'replay':
          clearSelections();
          switchScreen('title');
          break;
        default:
          break;
      }
    }
    
    // ---------------------------------------------
    // モーダルの開閉
    // ---------------------------------------------
    function openModal(modal) {
      if (!modal) return;
      modal.classList.remove('is-hidden');
      backdrop.classList.remove('is-hidden');
    }
    
    function closeModal() {
      document.querySelectorAll('.modal').forEach((modal) => modal.classList.add('is-hidden'));
      backdrop.classList.add('is-hidden');
    }
    
    // ---------------------------------------------
    // 選択関連の処理
    // ---------------------------------------------
    function setPreviewHorse(horseId) {
      if (!horseId) {
        resetPreviewPanel();
        return;
      }
    
      if (currentPreviewCard) {
        currentPreviewCard.classList.remove('is-preview');
        currentPreviewCard = null;
      }
    
      const card = document.querySelector(`.horse-card[data-horse-id="${horseId}"]`);
      if (card) {
        card.classList.add('is-preview');
        currentPreviewCard = card;
      }
    
      previewHorseId = horseId;
      const horse = horses.find((h) => h.id === horseId);
      if (!horse) {
        resetPreviewPanel();
        return;
      }
    
      if (previewNameImg) {
        if (horse.nameImg) {
          previewNameImg.src = horse.nameImg;
          previewNameImg.alt = `${horse.name}の紹介画像`;
          previewNameImg.hidden = false;
        } else {
          previewNameImg.hidden = true;
        }
      }
      updateSelectButton();
      refreshCardAnimations();
    }
    
    function resetPreviewPanel() {
      previewHorseId = null;
      if (currentPreviewCard) {
        currentPreviewCard.classList.remove('is-preview');
        currentPreviewCard = null;
      }
      if (previewNameImg) {
        previewNameImg.src = '';
        previewNameImg.hidden = true;
      }
      updateSelectButton();
      refreshCardAnimations();
    }
    
    function confirmPreviewSelection() {
      if (!previewHorseId) return;
      if (selectedOrder.includes(previewHorseId)) return;
    
      const emptyIndex = selectedOrder.findIndex((id) => !id);
      if (emptyIndex === -1) return;
    
      selectedOrder[emptyIndex] = previewHorseId;
      updateSelectionSlots();
      updateCardsBadge();
      updateStartButton();
      updateSelectButton();
    }
    
    function removeSelectionAt(rank) {
      if (rank < 0 || rank >= selectedOrder.length) return;
      const removed = selectedOrder[rank];
      if (!removed) return;
    
      selectedOrder[rank] = null;
      updateSelectionSlots();
      updateCardsBadge();
      updateStartButton();
      setPreviewHorse(removed);
      updateSelectButton();
    }
    
    function clearSelections() {
      selectedOrder = Array(MAX_SELECTION_RANKS).fill(null);
      updateSelectionSlots();
      updateCardsBadge();
      updateStartButton();
      resetPreviewPanel();
    }
    
    function updateSelectionSlots() {
      selectionSlots.forEach((slot, index) => {
        const img = slotImages[index];
        const clearBtn = slotClearButtons[index];
        const horseId = selectedOrder[index];
        if (horseId) {
          const horse = horses.find((h) => h.id === horseId);
          if (img && horse) {
            stopTwoFrameLoop(img);
            registerHorseImageElement(horse.id, img);
            const frames = getHorseFramesForId(horse.id);
            setImageSrc(img, frames.stop);
            img.alt = `${horse.name}のイラスト`;
          }
          if (clearBtn) {
            clearBtn.hidden = false;
            clearBtn.dataset.removeRank = String(index);
          }
        } else {
          if (img) {
            stopTwoFrameLoop(img);
            unregisterHorseImageElement(img);
            setImageSrc(img, placeholderHorseSrc);
            img.alt = '未選択のシルエット';
          }
          if (clearBtn) {
            clearBtn.hidden = true;
            clearBtn.removeAttribute('data-remove-rank');
          }
        }
      });
      refreshSelectionSlotAnimations();
      refreshCardAnimations();
    }
    
    function updateStartButton() {
      startButton.disabled = !selectedOrder.every((id) => Boolean(id));
    }
    
    function updateSelectButton() {
      if (!selectButton) return;
      const filledCount = selectedOrder.reduce((count, id) => (id ? count + 1 : count), 0);
      const shouldDisable =
        !previewHorseId || filledCount >= MAX_SELECTION_RANKS || selectedOrder.includes(previewHorseId);
      selectButton.disabled = shouldDisable;
    }
    
    function updateCardsBadge() {
      const cardElements = document.querySelectorAll('.horse-card');
      cardElements.forEach((card) => {
        const id = card.dataset.horseId;
        card.querySelector('.badge')?.remove();
        const index = selectedOrder.indexOf(id);
        if (index !== -1) {
          const badge = document.createElement('span');
          badge.className = 'badge';
          badge.textContent = index + 1;
          card.append(badge);
        }
      });
    }
    // ---------------------------------------------
    // 画面遷移（フェード用クラス操作）
    // ---------------------------------------------
    function switchScreen(screenId) {
      if (currentScreen === screenId) return;
      stopAllHorseAnimationLoops();
      const previous = document.querySelector(`.screen[data-screen-id="${currentScreen}"]`);
      const next = document.querySelector(`.screen[data-screen-id="${screenId}"]`);
      if (!next) return;

      previous?.classList.remove('is-active');
      previous?.classList.add('is-leaving');
      next.classList.add('is-active');
      next.classList.remove('is-leaving');
      app.dataset.screen = screenId;
      updateControls(screenId);
      currentScreen = screenId;

      if (screenId === 'predict') {
        // 選択画面に来たら常に h1 を選択済みに見せる
        setPreviewHorse('h1');
      }

      if (
        screenId === 'predict' &&
        (!previewHorseId || !horses.some((horse) => horse.id === previewHorseId)) &&
        PREDICTION_DISPLAY_ORDER.length > 0
      ) {
        setPreviewHorse(PREDICTION_DISPLAY_ORDER[0]);
      }

      if (previous) {
        setTimeout(() => {
          previous.classList.remove('is-leaving');
          previous.setAttribute('aria-hidden', 'true');
        }, 180);
      }
      next.setAttribute('aria-hidden', 'false');
      refreshAnimationsForCurrentScreen();
    }

    function updateControls(screenId) {
      controlGroups.forEach((group) => {
        if (group.dataset.controlsId === screenId) {
          group.classList.add('is-active');
          group.removeAttribute('aria-hidden');
        } else {
          group.classList.remove('is-active');
          group.setAttribute('aria-hidden', 'true');
        }
      });
      requestAnimationFrame(applyStageScale);
    }

    // ---------------------------------------------
    // レース開始処理
    // ---------------------------------------------
    function startRace() {
      if (!selectedOrder.every((id) => Boolean(id))) {
        console.warn('[race] 3頭選択後にレースを開始してください。');
        return;
      }
      switchScreen('race');
      speedButton.disabled = false;
      speedButton.textContent = 'SPEED UP';
      populateRacePredictionPanel();
      resetTekichuBadges();
      resetRaceFinishElements();
      const resolvedSelection = selectedOrder.map((id) => {
        const horse = horses.find((h) => h.id === id);
        if (!horse) {
          console.warn('[race] 選択したIDに対応する馬データが見つかりませんでした。', {
            horseId: id
          });
        }
        return horse || null;
      });
      raceController = new RaceController(resolvedSelection);
      raceController.start();
    }

    function populateRacePredictionPanel() {
      if (!racePredictionList) return;
      unregisterHorseImagesIn(racePredictionList);
      racePredictionList.innerHTML = '';
      racePredictionHorseImgs.length = 0;
      racePredictionTekichuImgs.length = 0;
      const order = [0, 1, 2];
      order.forEach((index) => {
        const horseId = selectedOrder[index];
        const horse = horses.find((h) => h.id === horseId);
        const item = document.createElement('li');
        item.className = 'race-prediction-item';
        item.dataset.rank = String(index + 1);
        if (horse) {
          const img = document.createElement('img');
          img.className = 'race-prediction-horse';
          const frames = getHorseFramesForId(horse.id);
          setImageSrc(img, frames.stop);
          registerHorseImageElement(horse.id, img);
          img.alt = '';
          img.setAttribute('aria-hidden', 'true');
          item.append(img);
          racePredictionHorseImgs[index] = img;
          const sr = document.createElement('span');
          sr.className = 'sr-only';
          sr.textContent = `${index + 1}着 ${horse.name}`;
          item.append(sr);
        } else {
          const img = document.createElement('img');
          img.className = 'race-prediction-horse';
          setImageSrc(img, placeholderHorseSrc);
          unregisterHorseImageElement(img);
          img.alt = '';
          img.setAttribute('aria-hidden', 'true');
          item.append(img);
          racePredictionHorseImgs[index] = img;
          const sr = document.createElement('span');
          sr.className = 'sr-only';
          sr.textContent = `${index + 1}着 未選択`;
          item.append(sr);
        }
        const badge = document.createElement('img');
        badge.className = 'race-tekichu';
        badge.src = RACE_TEKICHU_SRC;
        badge.alt = '的中';
        badge.setAttribute('aria-hidden', 'true');
        item.append(badge);
        racePredictionTekichuImgs[index] = badge;
        racePredictionList.append(item);
      });
    }

    function resetTekichuBadges() {
      racePredictionTekichuImgs.forEach((badge) => {
        if (badge) {
          badge.classList.remove('is-visible');
        }
      });
    }

    function markTekichuBadge(rankIndex) {
      const badge = racePredictionTekichuImgs[rankIndex];
      if (badge) {
        badge.classList.add('is-visible');
      }
    }

    function resetRaceFinishElements() {
      if (raceController) {
        raceController.dispose();
        raceController = null;
      }
      if (countdownEl) {
        countdownEl.textContent = '';
      }
      if (speedButton) {
        speedButton.disabled = true;
        speedButton.textContent = 'SPEED UP';
      }
      if (raceCanvas) {
        const ctx = raceCanvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, raceCanvas.width, raceCanvas.height);
        }
      }
      resetTekichuBadges();
    }
    // ---------------------------------------------
    // レース制御クラス
    // ---------------------------------------------
    class RaceController {
      constructor(selectedHorses) {
        const sanitized = Array.isArray(selectedHorses)
          ? selectedHorses.map((horse) => horse || null)
          : [];
        this.selectedHorses = sanitized;
        this.heroHorse = sanitized[0] || createPlaceholderHorse('hero');
        this.secondHorse = sanitized[1] || null;
        this.thirdHorse = sanitized[2] || null;
        this.canvas = raceCanvas;
        this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.running = false;
        this.speedMultiplier = 1;
        this.speedBoostRemaining = 0;
        this.baseSpeed = 0;
        this.currentSpeed = 0;
        this.lastTimestamp = 0;
        this.stateIndex = 0;
        this.stateElapsedMs = 0;
        this.sequence = [...RACE_STATE_SEQUENCE];
        this.backgroundOffsets = { sky: 0, bloom: 0, ground: 0 };
        this.goal = null;
        this.goalCenterX = 0;
        this.heroRunner = null;
        this.secondRunner = null;
        this.thirdRunner = null;
        this.otherRunners = [];
        this.runnerHeight = 0;
        this.stageScale = 1;
        this.stageWidth = 0;
        this.stageHeight = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.passMargin = 0;
        this.finishSpeed = 0;
        this.rafId = null;
        this.countdownValues = ['3', '2', '1', 'GO!'];
        this.completing = false;
        this.timelineSeconds = 0;
        this.relativeAdvanceSpeed = 0;
        this.distanceMarkerOffset = 0;
        this.markerSpacing = 0;
        this.markerHeight = 0;
        this.markerWidth = 0;
        this.afterStraight = false;
        this.straightTelopTimer = 0;
        this.zoomTimer = 0;
        this.photoFinishTimer = 0;
        this.photoFlashTimer = 0;
        this.photoFinishActive = false;
        this.stageEl = raceStageEl;
        this.trackEl = raceScrollInner || raceScrollViewport || raceTrack;
        this.straightTelopEl = raceStraightTelopEl;
        this.photoFlashEl = racePhotoFlashEl;
        this.distanceTelopEls = raceDistanceTelops;
        this.distanceTelopState = {
          200: { remaining: 0 },
          100: { remaining: 0 }
        };
        this.distanceTelopQueue = [];
        this.zoomScale = 1;
        this.panX = 0;
        this.panY = 0;
        this.panBaseX = 0;
        this.panBaseY = 0;
        this.shakeConfig = null;
        this.shakeTimer = 0;
        this.shakeTotal = 0;
        this.climaxActive = false;
        this.climaxTimer = 0;
        this.climaxDurationMs = 0;
        this.climaxContenders = [];
        this.climaxContenderData = new Map();
        this.climaxShakeTriggered = false;
        this.climaxReliefTimer = 0;
        this.climaxReliefDuration = 0;
        this.climaxExtraZoom = 0;
        this.dustParticles = [];
        this.dustAccumulator = 0;
        this.dustRateMultiplier = 1;
        this.heroCameraBias = 0;
        this.heroLead = 0;
        this.heroBaseX = 0;
        this.heroSpeedTarget = 0;
        this.cameraFollowStrength = RACE_CAMERA_FOLLOW_STRENGTH.default;
        this.speedEffectsRoot = raceSpeedEffectsRoot;
        this.speedEffectTimer = null;
        this.finishCameraLocked = false;
        this.finishCameraPan = 0;
      }

      dispose() {
        if (this.rafId !== null) {
          cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
        this.running = false;
        this.speedMultiplier = 1;
        this.speedBoostRemaining = 0;
        this.toggleClimaxVisuals(false);
        this.setTrackZoom(1);
        this.panX = this.panBaseX;
        this.panY = this.panBaseY;
        this.setTrackPan(this.panX, this.panY);
        this.setTrackShake(0, 0);
        this.finishCameraLocked = false;
        this.finishCameraPan = 0;
        this.clearClimaxContenders();
        this.stopSpeedEffects();
      }

      async start() {
        if (!this.canvas || !this.ctx) {
          console.warn('[race] キャンバス要素が見つからないため、レース演出を開始できません。');
          return;
        }

        this.stopSpeedEffects();
        if (this.speedEffectsRoot) {
          this.speedEffectsRoot.innerHTML = '';
        }

        await this.ensureAssets();
        this.setupScene();
        this.render();
        await this.prepareCountdown();

        this.running = true;
        this.lastTimestamp = performance.now();
        this.refreshSpeedControl();
        window.race = this;
        this.rafId = requestAnimationFrame(this.update.bind(this));
      }

      async ensureAssets() {
        if (raceAssetPromise) {
          return raceAssetPromise;
        }

        const framePromises = Array.from(horseFramePromises.values());
        if (framePromises.length > 0) {
          await Promise.allSettled(framePromises);
        }

        const sources = new Set([
          RACE_ASSET_PATHS.sky,
          RACE_ASSET_PATHS.bloom,
          RACE_ASSET_PATHS.ground,
          RACE_ASSET_PATHS.goal,
          RACE_TEKICHU_SRC,
          placeholderHorseSrc
        ]);

        this.selectedHorses.forEach((horse) => {
          if (horse?.img) {
            sources.add(horse.img);
          }
          const frames = horse ? horseFrameCache.get(horse.id) : null;
          if (frames?.stop) {
            sources.add(frames.stop);
          }
          if (frames?.run) {
            sources.add(frames.run);
          }
        });
        horses.forEach((horse) => {
          if (horse?.img) {
            sources.add(horse.img);
          }
          const frames = horseFrameCache.get(horse.id);
          if (frames?.stop) {
            sources.add(frames.stop);
          }
          if (frames?.run) {
            sources.add(frames.run);
          }
        });

        raceAssetPromise = Promise.all(
          Array.from(sources).map((src) => loadImage(src))
        ).then((entries) => {
          entries.forEach(([src, image]) => {
            if (image) {
              raceAssetCache.set(src, image);
            }
          });
          return raceAssetCache;
        });

        return raceAssetPromise;
      }

      async prepareCountdown() {
        return new Promise((resolve) => {
          let index = 0;
          if (countdownEl) {
            countdownEl.textContent = this.countdownValues[index];
          }
          const timer = setInterval(() => {
            index += 1;
            if (index >= this.countdownValues.length) {
              clearInterval(timer);
              if (countdownEl) {
                countdownEl.textContent = '';
              }
              resolve();
            } else if (countdownEl) {
              countdownEl.textContent = this.countdownValues[index];
            }
          }, COUNTDOWN_INTERVAL_MS);
        });
      }

      setupScene() {
        this.stageWidth = this.canvas.width;
        this.stageHeight = this.canvas.height;
        this.scaleX = this.stageWidth / RACE_VIRTUAL_WIDTH;
        this.scaleY = this.stageHeight / RACE_VIRTUAL_HEIGHT;
        this.stageScale = this.stageHeight / RACE_STAGE_BASE_HEIGHT;
        this.heroCameraBias = this.stageWidth * RACE_CAMERA_HERO_BIAS;
        const stageX = (value) => (value / STAGE_RATIO_W) * this.stageWidth;
        const stageY = (value) => (value / RACE_STAGE_BASE_HEIGHT) * this.stageHeight;
        this.runnerHeight = stageY(130);
        this.passMargin = stageX(RACE_PASS_MARGIN);
        this.finishSpeed = this.toCanvasSpeed(RACE_FINISH_SPEED);
        this.baseSpeed = this.toCanvasSpeed(RACE_BASE_SPEED_PER_SEC);
        this.currentSpeed = this.baseSpeed;
        this.heroSpeedTarget = this.baseSpeed;
        this.backgroundOffsets = { sky: 0, bloom: 0, ground: 0 };
        this.completing = false;
        this.relativeAdvanceSpeed = this.toCanvasSpeed(RACE_MIN_RELATIVE_SPEED_PER_SEC);
        this.timelineSeconds = 0;
        this.markerSpacing = this.stageToCanvasX(RACE_DISTANCE_MARKER_SPACING);
        this.markerHeight = stageY(RACE_DISTANCE_MARKER_HEIGHT);
        this.markerWidth = Math.max(2, this.stageToCanvasX(RACE_DISTANCE_MARKER_WIDTH));
        this.distanceMarkerOffset = 0;
        this.afterStraight = false;
        this.straightTelopTimer = 0;
        this.zoomTimer = 0;
        this.photoFinishTimer = 0;
        this.photoFlashTimer = 0;
        this.photoFinishActive = false;
        this.updateZoomClass(false);
        this.toggleStraightTelop(false);
        this.updatePhotoFlash(0);
        this.toggleClimaxVisuals(false);
        this.climaxActive = false;
        this.climaxTimer = 0;
        this.climaxDurationMs = 0;
        this.climaxShakeTriggered = false;
        this.climaxReliefTimer = 0;
        this.climaxReliefDuration = 0;
        this.climaxExtraZoom = 0;
        this.climaxContenders = [];
        this.climaxContenderData.clear();
        this.setTrackPan(0, 0);
        this.setTrackShake(0, 0);
        if (this.stageEl) {
          this.stageEl.style.setProperty('--race-ground-blur', '0px');
        }
        this.setTrackZoom(1);
        this.dustParticles = [];
        this.dustAccumulator = 0;
        this.dustRateMultiplier = 1;
        this.finishCameraLocked = false;
        this.finishCameraPan = 0;
        this.distanceTelopQueue = [];
        Object.values(this.distanceTelopState).forEach((entry) => {
          entry.remaining = 0;
        });
        this.showDistanceTelop('200', false);
        this.showDistanceTelop('100', false);

        this.heroRunner = this.createRunner(this.heroHorse, {
          x: stageX(90),
          y: stageY(396),
          fixed: true,
          label: 'hero',
          rankIndex: 0,
          waveAmplitude: 0,
          boostSensitivity: 0,
          legType: 'front'
        });
        this.heroBaseX = this.heroRunner.x;
        this.heroLead = 0;

        const heroCenter = this.heroRunner.x + this.heroRunner.width / 2;
        const heroFront = this.heroRunner.x + this.heroRunner.width;
        const secondHoldOffset = stageX(RACE_SECOND_HOLD_OFFSET);
        const thirdHoldOffset = stageX(RACE_THIRD_HOLD_OFFSET);

        this.secondRunner = this.secondHorse
          ? this.createRunner(this.secondHorse, {
              x: heroFront,
              y: stageY(520),
              speedFactor: 1.08,
              label: 'second',
              rankIndex: 1,
              holdOffset: secondHoldOffset,
              waveAmplitude: RACE_SURGE_AMPLITUDE * 1.1,
              boostSensitivity: 0.75,
              legType: 'stalker'
            })
          : null;
        if (this.secondRunner) {
          const center = heroCenter + secondHoldOffset;
          this.secondRunner.x = center - this.secondRunner.width / 2;
        }

        this.thirdRunner = this.thirdHorse
          ? this.createRunner(this.thirdHorse, {
              x: heroFront,
              y: stageY(600),
              speedFactor: 1.04,
              label: 'third',
              rankIndex: 2,
              holdOffset: thirdHoldOffset,
              waveAmplitude: RACE_SURGE_AMPLITUDE * 1.05,
              boostSensitivity: 0.8,
              legType: 'closer'
            })
          : null;
        if (this.thirdRunner) {
          const center = heroCenter + thirdHoldOffset;
          this.thirdRunner.x = center - this.thirdRunner.width / 2;
        }

        const selectedIds = this.selectedHorses
          .filter(Boolean)
          .map((horse) => horse.id);
        const laneHeights = RACE_OTHER_LANES.map((lane) => stageY(lane));
        const laneCount = Math.max(1, laneHeights.length);
        const othersSource = shuffleArray(
          horses.filter((horse) => !selectedIds.includes(horse.id))
        );

        this.otherRunners = othersSource.map((horse, index) => {
          const laneIndex = index % laneCount;
          const rowIndex = Math.floor(index / laneCount);
          const waveScale = 0.7 + Math.random() * 0.6;
          const legType = RACE_LEG_TYPES[index % RACE_LEG_TYPES.length];
          const runner = this.createRunner(horse, {
            x: heroFront,
            y: laneHeights[laneIndex],
            speedFactor: 1.08 + Math.random() * 0.08,
            label: `other-${index + 1}`,
            allowedToPass: false,
            laneIndex,
            rowIndex,
            slotIndex: index,
            waveAmplitude: RACE_SURGE_AMPLITUDE * waveScale,
            boostSensitivity: 1,
            legType
          });
          return runner;
        });

        this.resetOthersToPack();
        this.prepareOthersForRun(true);

        [this.heroRunner, this.secondRunner, this.thirdRunner]
          .filter(Boolean)
          .forEach((runner) => this.updateRunnerAnimation(runner, 0));
        if (this.otherRunners) {
          this.otherRunners.forEach((runner) => this.updateRunnerAnimation(runner, 0));
        }

        this.goal = this.createGoal();
        this.goalCenterX = this.goal ? this.goal.targetX : this.stageWidth * RACE_GOAL_TARGET_RATIO;
        this.stateIndex = 0;
        this.stateElapsedMs = 0;
        if (this.sequence.length > 0) {
          this.applyStateEntry(this.sequence[0]);
        }
      }
      updateZoomClass(enable) {
        if (!this.stageEl) return;
        if (enable) {
          this.stageEl.classList.add('is-straight-zoom');
          this.setTrackZoom(RACE_STRAIGHT_ZOOM_SCALE);
        } else {
          this.stageEl.classList.remove('is-straight-zoom');
          this.setTrackZoom(1);
        }
      }

      toggleStraightTelop(show) {
        if (!this.straightTelopEl) return;
        if (show) {
          this.straightTelopEl.textContent = RACE_STRAIGHT_TELOP_TEXT;
          this.straightTelopEl.classList.add('is-visible');
        } else {
          this.straightTelopEl.classList.remove('is-visible');
        }
      }

      enterClimaxState(duration) {
        this.climaxActive = true;
        this.climaxDurationMs = duration ?? scaledDuration(RACE_CLIMAX_DURATION);
        this.climaxTimer = 0;
        this.climaxShakeTriggered = false;
        this.climaxReliefTimer = 0;
        this.climaxReliefDuration = 0;
        this.applyImmersionProfile('climax');
        const baseZoom = 1 + (RACE_STATE_IMMERSION.climax?.zoom ?? 0);
        const targetZoom = Math.max(
          baseZoom + RACE_CLIMAX_EXTRA_ZOOM,
          RACE_CLIMAX_ZOOM_TO
        );
        this.climaxExtraZoom = targetZoom;
        this.setTrackZoom(targetZoom);
        this.toggleClimaxVisuals(true);
        this.applyClimaxLaneOffsets();
        this.setupClimaxContenders();
        this.distanceTelopQueue = [
          { distance: '200', delay: RACE_CLIMAX_DISTANCE_TOGGLE_200 },
          { distance: '100', delay: RACE_CLIMAX_DISTANCE_TOGGLE_100 }
        ];
        Object.values(this.distanceTelopState).forEach((entry) => {
          entry.remaining = 0;
        });
        this.showDistanceTelop('200', false);
        this.showDistanceTelop('100', false);
      }

      endClimaxState() {
        this.climaxActive = false;
        this.dustRateMultiplier = 1;
        this.toggleClimaxVisuals(false);
        if (this.afterStraight) {
          this.setTrackZoom(RACE_STRAIGHT_ZOOM_SCALE);
        } else {
          this.setTrackZoom(1);
        }
        [this.heroRunner, this.secondRunner, this.thirdRunner]
          .filter(Boolean)
          .forEach((runner) => {
            runner.visualOffsetX = 0;
            runner.visualOffsetY = 0;
            if (runner.baseY != null) {
              runner.y = runner.baseY;
            }
          });
        if (this.otherRunners) {
          this.otherRunners.forEach((runner) => {
            runner.visualOffsetX = 0;
            runner.visualOffsetY = 0;
            if (runner.baseY != null) {
              runner.y = runner.baseY;
            }
          });
        }
        this.setTrackPan(0, 0);
        this.setTrackShake(0, 0);
        this.clearClimaxContenders();
        this.climaxReliefTimer = 0;
        this.climaxReliefDuration = 0;
        this.showDistanceTelop('200', false);
        this.showDistanceTelop('100', false);
      }

      applyClimaxLaneOffsets() {
        if (this.heroRunner && this.heroRunner.baseY != null) {
          const shift = this.stageToCanvasY(RACE_CLIMAX_HERO_INNER_SHIFT);
          this.heroRunner.y = this.heroRunner.baseY - shift;
        }
        const rivals = [this.secondRunner, this.thirdRunner].filter(Boolean);
        rivals.forEach((runner) => {
          const [minShift, maxShift] = RACE_CLIMAX_RIVAL_OUTER_SHIFT;
          const shift = this.stageToCanvasY(randomRange(minShift, maxShift));
          if (runner.baseY != null) {
            runner.y = runner.baseY + shift;
          }
        });
      }

      setupClimaxContenders() {
        this.climaxContenderData.clear();
        this.climaxContenders = [];
        if (!Array.isArray(this.otherRunners) || !this.otherRunners.length) {
          return;
        }
        const active = this.otherRunners.filter((runner) => runner && runner.spawned && !runner.exited);
        if (!active.length) {
          return;
        }
        const candidates = shuffleArray(active);
        const extrasNeeded = Math.max(0, RACE_CLIMAX_CONTENDER_TOTAL - 3);
        const desiredExtras = Math.max(0, extrasNeeded, RACE_CLIMAX_EXTRA_CONTENDERS);
        const count = Math.min(desiredExtras, candidates.length);
        const baseStick = this.stageToCanvasX(RACE_CLIMAX_CONTENDER_STICK_PX);
        const releaseAt = Math.max(0, this.climaxDurationMs - 400);
        for (let i = 0; i < count; i += 1) {
          const runner = candidates[i];
          if (!runner) continue;
          const leadDuration = randomRange(
            RACE_CLIMAX_FAKE_LEAD_TIME[0],
            RACE_CLIMAX_FAKE_LEAD_TIME[1]
          );
          const maxStart = Math.max(0, releaseAt - leadDuration - 60);
          const windowMin = RACE_CLIMAX_CONTENDER_FAKE_LEAD[0];
          const windowMax = Math.max(windowMin, Math.min(RACE_CLIMAX_CONTENDER_FAKE_LEAD[1], maxStart));
          const leadStart = Math.min(maxStart, randomRange(windowMin, windowMax));
          const ratio = count > 1 ? i / Math.max(1, count - 1) : 0;
          const stickMultiplier = 0.82 + ratio * 0.28;
          this.climaxContenderData.set(runner, {
            runner,
            baseOffset: baseStick * stickMultiplier,
            leadStart,
            leadDuration,
            leadElapsed: 0,
            leading: false,
            triggered: false,
            releaseAt,
            released: false
          });
          runner.allowedToPass = true;
          runner.passed = false;
          runner.opacity = 1;
          runner.fading = false;
          runner.fadeElapsed = 0;
          runner.fadeDuration = 0;
          runner.visualOffsetX = 0;
          this.climaxContenders.push(runner);
        }
      }

      updateClimaxContenders(deltaSeconds, heroCenter) {
        if (!this.climaxContenderData.size) {
          return;
        }
        const deltaMs = deltaSeconds * 1000;
        const removals = [];
        this.climaxContenderData.forEach((info, runner) => {
          if (!runner || runner.exited) {
            removals.push(runner);
            return;
          }
          if (!info.released && this.climaxTimer >= info.releaseAt) {
            info.released = true;
            runner.visualOffsetX = 0;
            removals.push(runner);
            return;
          }
          if (info.released) {
            return;
          }
          if (!info.triggered && this.climaxTimer >= info.leadStart) {
            info.leading = true;
            info.triggered = true;
            info.leadElapsed = 0;
          }
          if (info.leading) {
            info.leadElapsed += deltaMs;
            if (info.leadElapsed >= info.leadDuration) {
              info.leading = false;
            }
          }
          const currentCenter = runner.x + runner.width / 2;
          let targetCenter = heroCenter + (info.baseOffset ?? 0);
          if (info.leading) {
            const half = Math.max(info.leadDuration / 2, 1);
            const normalized = Math.max(0, 1 - Math.abs(info.leadElapsed - half) / half);
            const leadShift = this.stageToCanvasX(RACE_CLIMAX_FAKE_LEAD_PX) * normalized;
            targetCenter = heroCenter - leadShift;
          }
          const followRate = RACE_OTHER_PACK_FOLLOW_RATE * 2.4;
          const rate = Math.min(1, deltaSeconds * followRate);
          runner.x += (targetCenter - currentCenter) * rate;
          runner.passed = false;
          runner.opacity = 1;
          runner.fading = false;
        });
        if (removals.length) {
          removals.forEach((runner) => {
            this.climaxContenderData.delete(runner);
            const index = this.climaxContenders.indexOf(runner);
            if (index >= 0) {
              this.climaxContenders.splice(index, 1);
            }
          });
        }
      }

      clearClimaxContenders() {
        if (this.climaxContenderData.size) {
          this.climaxContenderData.forEach((info) => {
            if (info?.runner) {
              info.runner.visualOffsetX = 0;
              info.runner.fading = false;
              info.runner.opacity = 1;
            }
          });
        }
        this.climaxContenderData.clear();
        this.climaxContenders = [];
      }

      isClimaxContender(runner) {
        return Boolean(runner && this.climaxContenderData.has(runner));
      }
      activateClimaxBoost() {
        const total = SPEED_UP_DURATION_MS + RACE_CLIMAX_RELIEF_FADEOUT;
        this.climaxReliefDuration = total;
        this.climaxReliefTimer = total;
      }

      queueDistanceTelops(deltaMs) {
        if (!this.distanceTelopQueue.length) return;
        const remaining = [];
        this.distanceTelopQueue.forEach((item) => {
          if (!this.distanceTelopState[item.distance]) {
            return;
          }
          const nextDelay = (item.delay ?? 0) - deltaMs;
          if (nextDelay <= 0) {
            this.distanceTelopState[item.distance].remaining = RACE_CLIMAX_DISTANCE_DURATION;
            this.showDistanceTelop(item.distance, true);
          } else {
            remaining.push({ distance: item.distance, delay: nextDelay });
          }
        });
        this.distanceTelopQueue = remaining;
      }

      updateDistanceTelops(deltaMs) {
        Object.entries(this.distanceTelopState).forEach(([key, entry]) => {
          if (entry.remaining <= 0) return;
          entry.remaining = Math.max(0, entry.remaining - deltaMs);
          if (entry.remaining === 0) {
            this.showDistanceTelop(key, false);
          }
        });
      }

      startShake(config) {
        if (!config) return;
        this.shakeConfig = {
          amplitude: config.amplitude,
          duration: (config.duration ?? 0) / 1000,
          repeats: config.repeats ?? 1
        };
        this.shakeTimer = 0;
        this.shakeTotal = 0;
      }

      updatePhotoFlash(alpha) {
        if (!this.photoFlashEl) return;
        const clamped = Math.max(0, Math.min(1, alpha || 0));
        this.photoFlashEl.style.opacity = clamped.toFixed(3);
      }

      setTrackZoom(scale) {
        this.zoomScale = scale;
        if (this.trackEl) {
          this.trackEl.style.setProperty('--race-zoom-scale', scale.toFixed(4));
        }
      }

      setTrackPan(x, y) {
        const nextX = Number.isFinite(x) ? x : 0;
        const nextY = Number.isFinite(y) ? y : 0;
        const clampedX = Math.min(0, nextX);
        this.panX = clampedX;
        this.panY = nextY;
        if (this.trackEl) {
          this.trackEl.style.setProperty('--race-pan-x', `${clampedX.toFixed(2)}px`);
          this.trackEl.style.setProperty('--race-pan-y', `${nextY.toFixed(2)}px`);
        }
        updateRaceBackdropParallax(clampedX);
      }

      setTrackShake(x = 0, y = 0) {
        if (this.trackEl) {
          this.trackEl.style.setProperty('--race-shake-x', `${x.toFixed(2)}px`);
          this.trackEl.style.setProperty('--race-shake-y', `${y.toFixed(2)}px`);
        }
      }

      toggleClimaxVisuals(enable) {
        if (!this.stageEl) return;
        this.stageEl.classList.toggle('is-climax', Boolean(enable));
      }

      startSpeedEffects() {
        if (!this.speedEffectsRoot || this.speedEffectTimer) {
          return;
        }
        if (prefersReducedMotion && prefersReducedMotion.matches) {
          return;
        }
        this.speedEffectsRoot.innerHTML = '';
        this.spawnSpeedEffect();
        this.speedEffectTimer = window.setInterval(
          () => this.spawnSpeedEffect(),
          SPEED_EFFECT_INTERVAL_MS
        );
      }

      stopSpeedEffects() {
        if (this.speedEffectTimer) {
          clearInterval(this.speedEffectTimer);
          this.speedEffectTimer = null;
        }
        if (this.speedEffectsRoot) {
          this.speedEffectsRoot.innerHTML = '';
        }
      }

      spawnSpeedEffect() {
        if (!this.speedEffectsRoot) {
          return;
        }
        const type = Math.random() < 0.4 ? 'star' : 'line';
        const effect = document.createElement('div');
        effect.className = 'fx-item';
        const img = document.createElement('img');
        img.alt = '';
        img.decoding = 'async';
        img.className = `fx-img fx-${type}`;
        setSpeedEffectImageSource(img, type);
        effect.append(img);

        const stageHeight = this.stageHeight || this.speedEffectsRoot.clientHeight || 0;
        const padding = Math.max(SPEED_EFFECT_VERTICAL_PADDING, stageHeight * 0.05);
        const usableHeight = Math.max(0, stageHeight - padding * 2);
        const offsetY = padding + (usableHeight > 0 ? Math.random() * usableHeight : 0);
        effect.style.top = `${offsetY}px`;

        this.speedEffectsRoot.append(effect);

        const travelBase = this.stageWidth || this.speedEffectsRoot.clientWidth || 0;
        const travelDistance = travelBase + 240;
        const duration =
          type === 'star' ? SPEED_EFFECT_STAR_DURATION_MS : SPEED_EFFECT_LINE_DURATION_MS;

        const animation = effect.animate(
          [
            { transform: 'translateX(0)', opacity: 1 },
            { transform: `translateX(-${travelDistance}px)`, opacity: 0 }
          ],
          {
            duration,
            easing: 'linear'
          }
        );
        animation.onfinish = () => {
          effect.remove();
        };
      }

      showDistanceTelop(distanceKey, show) {
        const el = this.distanceTelopEls?.[distanceKey];
        if (!el) return;
        el.classList.toggle('is-visible', Boolean(show));
      }

      triggerStraightPhase() {
        this.afterStraight = true;
        this.straightTelopTimer = RACE_STRAIGHT_TELOP_DURATION_MS;
        this.zoomTimer = RACE_STRAIGHT_ZOOM_DURATION_MS;
        this.toggleStraightTelop(true);
        this.updateZoomClass(true);
      }

      updateEffects(deltaSeconds) {
        if (this.straightTelopTimer > 0) {
          this.straightTelopTimer = Math.max(
            0,
            this.straightTelopTimer - deltaSeconds * 1000
          );
          if (this.straightTelopTimer === 0) {
            this.toggleStraightTelop(false);
          }
        }
        if (this.zoomTimer > 0) {
          this.zoomTimer = Math.max(0, this.zoomTimer - deltaSeconds * 1000);
          if (this.zoomTimer === 0) {
            this.updateZoomClass(false);
          }
        }
        if (this.photoFinishTimer > 0) {
          this.photoFinishTimer = Math.max(0, this.photoFinishTimer - deltaSeconds * 1000);
          if (this.photoFinishTimer === 0) {
            this.photoFinishActive = false;
          }
        }
        if (this.photoFlashTimer > 0) {
          this.photoFlashTimer = Math.max(0, this.photoFlashTimer - deltaSeconds * 1000);
        }
        const flashAlpha =
          this.photoFlashTimer > 0
            ? (this.photoFlashTimer / RACE_PHOTO_FLASH_DURATION_MS) * RACE_PHOTO_FLASH_MAX_ALPHA
            : 0;
        this.updatePhotoFlash(flashAlpha);
      }

      triggerPhotoFinish() {
        if (this.photoFinishActive) {
          return;
        }
        this.photoFinishActive = true;
        this.photoFinishTimer = RACE_PHOTO_LINE_DURATION_MS;
        this.photoFlashTimer = RACE_PHOTO_FLASH_DURATION_MS;
        this.updatePhotoFlash(RACE_PHOTO_FLASH_MAX_ALPHA);
      }

      createGoal() {
        const image = this.resolveImage(RACE_ASSET_PATHS.goal);
        const height = (223 / RACE_STAGE_BASE_HEIGHT) * this.stageHeight;
        const aspect = image && image.height ? image.width / image.height : 1;
        const width = height * aspect;
        const startX = this.stageWidth + width;
        const top = (170 / RACE_STAGE_BASE_HEIGHT) * this.stageHeight;
        return {
          image,
          startX,
          x: startX,
          targetX: this.stageWidth * RACE_GOAL_TARGET_RATIO,
          y: top,
          width,
          height,
          progress: 0,
          active: false,
          stopped: false
        };
      }
      applyStateEntry(state) {
        this.stateElapsedMs = 0;
        const factor = RACE_STATE_SPEED_FACTORS[state.key];
        if (typeof factor === 'number') {
          this.heroSpeedTarget = this.baseSpeed * factor;
          if (this.stateIndex === 0 && this.timelineSeconds === 0) {
            this.currentSpeed = this.heroSpeedTarget;
          }
        }
        if (state.key !== 'climax' && this.climaxActive) {
          this.endClimaxState();
        }
        switch (state.key) {
          case 'intro':
            break;
          case 'others':
            this.prepareOthersForRun(true);
            this.alignFinalistToHold(this.secondRunner);
            this.alignFinalistToHold(this.thirdRunner);
            break;
          case RACE_STRAIGHT_STATE_KEY:
            this.alignFinalistToHold(this.secondRunner);
            this.alignFinalistToHold(this.thirdRunner);
            this.triggerStraightPhase();
            break;
          case 'climax':
            this.enterClimaxState(state.duration);
            break;
          case 'third':
            if (this.thirdRunner) {
              this.alignFinalistToHold(this.thirdRunner);
              this.thirdRunner.speedFactor = Math.min(1.16, this.thirdRunner.speedFactor + 0.12);
              this.thirdRunner.boosted = true;
            }
            break;
          case 'second':
            if (this.secondRunner) {
              this.alignFinalistToHold(this.secondRunner);
              this.secondRunner.speedFactor = Math.min(1.18, this.secondRunner.speedFactor + 0.12);
              this.secondRunner.boosted = true;
            }
            break;
          case 'lead':
            if (this.secondRunner) {
              this.secondRunner.speedFactor = Math.max(1.05, this.secondRunner.baseFactor ?? 1.05);
              this.secondRunner.boosted = false;
            }
            if (this.thirdRunner) {
              this.thirdRunner.speedFactor = Math.max(1.02, this.thirdRunner.baseFactor ?? 1.02);
              this.thirdRunner.boosted = false;
            }
            break;
          case 'goal':
            if (this.goal) {
              this.goal.active = true;
              this.goal.stopped = false;
              this.goal.progress = 0;
              this.goal.x = this.goal.startX;
            }
            break;
          case 'finish':
            this.prepareFinishRunners();
            break;
          default:
            break;
        }
        if (state.key !== 'climax') {
          this.applyImmersionProfile(state.key);
        }
        this.refreshSpeedControl();
      }

      applyImmersionProfile(stateKey) {
        const profile =
          RACE_STATE_IMMERSION[stateKey] ?? RACE_STATE_IMMERSION.default ?? null;
        const zoomDelta = profile?.zoom ?? 0;
        const panXStage = profile?.panX ?? 0;
        const panYStage = profile?.panY ?? 0;
        const blur = profile?.groundBlur ?? 0;
        const dust = profile?.dust ?? 1;
        const shake = profile?.shake ?? 0;

        const zoomTarget = 1 + zoomDelta;
        this.setTrackZoom(zoomTarget);

        const panX = this.stageToCanvasX(panXStage) + (this.heroCameraBias || 0);
        const panY = this.stageToCanvasY(panYStage);
        this.panBaseX = panX;
        this.panBaseY = panY;
        this.cameraFollowStrength =
          RACE_CAMERA_FOLLOW_STRENGTH[stateKey] ?? RACE_CAMERA_FOLLOW_STRENGTH.default;
        const heroCenter = this.heroRunner
          ? this.heroRunner.x + this.heroRunner.width / 2
          : this.stageWidth * 0.5;
        const anchor = this.stageWidth * RACE_CAMERA_FOLLOW_ANCHOR;
        this.panX = this.panBaseX + (anchor - heroCenter);
        this.panY = this.panBaseY;
        this.setTrackPan(this.panX, this.panY);

        if (this.stageEl) {
          this.stageEl.style.setProperty('--race-ground-blur', `${blur}px`);
        }

        this.dustRateMultiplier = dust;

        if (shake > 0) {
          this.startShake({ amplitude: shake, duration: 120, repeats: 1 });
        } else if (!this.climaxActive) {
          this.setTrackShake(0, 0);
        }
      }

      resetOthersToPack() {
        if (!this.otherRunners || !this.heroRunner) return;
        const heroCenter = this.heroRunner.x + this.heroRunner.width / 2;
        const baseOffset = this.stageToCanvasX(RACE_OTHER_PACK_BASE_OFFSET);
        const columnSpacing = this.stageToCanvasX(RACE_OTHER_PACK_COLUMN_SPACING);
        const rowSpacing = this.stageToCanvasX(RACE_OTHER_PACK_ROW_SPACING);
        const laneCount = Math.max(1, RACE_OTHER_LANES.length);

        this.otherRunners.forEach((runner, index) => {
          const laneIndex = runner.laneIndex ?? (index % laneCount);
          const rowIndex = runner.rowIndex ?? Math.floor(index / laneCount);
          const alignOffset = baseOffset + columnSpacing * laneIndex + rowSpacing * rowIndex;
          runner.packAlignOffset = alignOffset;
          const desiredCenter = heroCenter + alignOffset;
          runner.x = desiredCenter - runner.width / 2;
          runner.passDelayBase =
            RACE_OTHER_PASS_DELAY_BASE_MS +
            rowIndex * RACE_OTHER_PASS_DELAY_STEP_MS +
            laneIndex * RACE_OTHER_PASS_DELAY_COLUMN_MS;
          runner.passDelayJitter = Math.random() * RACE_OTHER_PASS_DELAY_RANDOM_MS;
          runner.passDelay = runner.passDelayBase + runner.passDelayJitter;
          runner.opacity = 1;
          runner.fading = false;
          runner.fadeElapsed = 0;
          runner.fadeDuration = 0;
        });
      }

      prepareOthersForRun(resetTimer = true) {
        if (!this.otherRunners) return;
        this.otherRunners.forEach((runner) => {
          runner.active = true;
          runner.spawned = true;
          runner.passed = false;
          runner.exited = false;
          runner.allowedToPass = false;
          runner.speedFactor = runner.baseFactor ?? runner.speedFactor;
          runner.boosted = false;
          runner.opacity = 1;
          runner.fading = false;
          runner.fadeElapsed = 0;
          runner.fadeDuration = 0;
          if (resetTimer) {
            const base = runner.passDelayBase ?? RACE_OTHER_PASS_DELAY_BASE_MS;
            const jitter = runner.passDelayJitter ?? 0;
            runner.passDelay = base + jitter;
          }
        });
      }

      alignFinalistToHold(runner) {
        if (!runner || runner.holdOffset == null || !this.heroRunner) return;
        const heroCenter = this.heroRunner.x + this.heroRunner.width / 2;
        const desiredCenter = heroCenter + runner.holdOffset;
        runner.x = desiredCenter - runner.width / 2;
      }

      prepareFinishRunners() {
        const schedule = RACE_FINISH_OFFSETS;
        const runners = [this.heroRunner, this.secondRunner, this.thirdRunner];
        runners.forEach((runner, index) => {
          if (!runner) return;
          const baseDelay = schedule[index] ?? schedule[schedule.length - 1];
          runner.runOut = false;
          runner.exited = false;
          runner.launchDelay = baseDelay * 1000;
          runner.runSpeed = this.finishSpeed * (1 - index * 0.04);
          runner.badgeTriggered = false;
        });
      }

      refreshSpeedControl() {
        if (!speedButton) return;
        const canBoost = this.running && this.isBoostableState();
        if (!canBoost) {
          speedButton.disabled = true;
          if (this.speedBoostRemaining <= 0) {
            speedButton.textContent = 'SPEED UP';
          }
          return;
        }
        if (this.speedBoostRemaining > 0) {
          speedButton.disabled = true;
          speedButton.textContent = '加速中！';
        } else {
          speedButton.disabled = false;
          speedButton.textContent = 'SPEED UP';
        }
      }

      isBoostableState() {
        const state = this.sequence[this.stateIndex];
        if (!state) return false;
        return !['goal', 'finish'].includes(state.key);
      }
      update(timestamp) {
        if (!this.running) {
          return;
        }

        const deltaSeconds = Math.min(0.05, (timestamp - this.lastTimestamp) / 1000);
        this.lastTimestamp = timestamp;
        this.stateElapsedMs += deltaSeconds * 1000;
        this.timelineSeconds += deltaSeconds;

        this.updateSpeed(deltaSeconds);

        const currentState = this.sequence[this.stateIndex];
        const stateKey = currentState?.key ?? null;
        let trackSpeed = this.currentSpeed * this.speedMultiplier;

        if (stateKey === 'goal' && currentState) {
          this.updateGoalState(currentState.duration);
          trackSpeed = this.currentSpeed * this.speedMultiplier;
        }

        const runnerSpeed = this.resolveRunnerSpeed(stateKey, trackSpeed);
        this.updateHeroLead(deltaSeconds, stateKey);
        this.updateRunners(deltaSeconds, runnerSpeed, stateKey, trackSpeed);

        this.updateBackground(trackSpeed, deltaSeconds);
        this.updateEffects(deltaSeconds);
        this.updateDust(trackSpeed, deltaSeconds);
        this.updateClimax(deltaSeconds, stateKey, trackSpeed);
        this.updateCamera(deltaSeconds, stateKey);
        this.render();

        if (currentState && this.stateElapsedMs >= currentState.duration && this.canAdvance(currentState.key)) {
          if (this.stateIndex < this.sequence.length - 1) {
            this.stateIndex += 1;
            this.applyStateEntry(this.sequence[this.stateIndex]);
          } else {
            this.completing = true;
          }
        }

        if (this.completing && this.canAdvance('finish')) {
          this.completeRace();
          return;
        }

        if (this.running) {
          this.rafId = requestAnimationFrame(this.update.bind(this));
        }
      }

      updateSpeed(deltaSeconds) {
        if (Number.isFinite(this.heroSpeedTarget)) {
          const accelPerSec = this.toCanvasSpeed(RACE_HERO_ACCELERATION_PER_SEC);
          if (accelPerSec > 0) {
            const diff = this.heroSpeedTarget - this.currentSpeed;
            const maxStep = accelPerSec * deltaSeconds;
            if (Math.abs(diff) <= maxStep) {
              this.currentSpeed = this.heroSpeedTarget;
            } else {
              this.currentSpeed += Math.sign(diff) * maxStep;
            }
          } else {
            this.currentSpeed = this.heroSpeedTarget;
          }
        }
        if (this.speedBoostRemaining > 0) {
          this.speedBoostRemaining = Math.max(0, this.speedBoostRemaining - deltaSeconds);
          if (this.speedBoostRemaining === 0) {
            this.speedMultiplier = 1;
            this.refreshSpeedControl();
            this.stopSpeedEffects();
          }
        }
      }

      updateHeroLead(deltaSeconds, stateKey) {
        if (!this.heroRunner || this.heroRunner.runOut) return;
        const targetStage =
          RACE_HERO_LEAD_DISTANCES[stateKey] ?? RACE_HERO_LEAD_DISTANCES.default ?? 0;
        const clampedStage = Math.min(RACE_HERO_LEAD_MAX_DISTANCE, Math.max(0, targetStage));
        const targetLead = this.stageToCanvasX(clampedStage);
        const approachPerSec = this.stageToCanvasX(RACE_HERO_LEAD_APPROACH_PER_SEC);
        const maxStep = approachPerSec * deltaSeconds;
        if (maxStep <= 0) {
          this.heroLead = targetLead;
        } else {
          const diff = targetLead - this.heroLead;
          if (Math.abs(diff) <= maxStep) {
            this.heroLead = targetLead;
          } else {
            this.heroLead += Math.sign(diff) * maxStep;
          }
        }
        const maxLead = this.stageToCanvasX(RACE_HERO_LEAD_MAX_DISTANCE);
        this.heroLead = Math.max(0, Math.min(this.heroLead, maxLead));
        this.heroRunner.x = this.heroBaseX + this.heroLead;
      }

      updateRunners(deltaSeconds, runnerSpeed, stateKey, trackSpeed) {
        const heroCenterX = this.heroRunner
          ? this.heroRunner.x + this.heroRunner.width / 2
          : 0;
        if (stateKey === 'finish') {
          this.updateFinishState(deltaSeconds);
        } else {
          this.updateFinalistRunner(
            this.thirdRunner,
            deltaSeconds,
            runnerSpeed,
            stateKey,
            ['goal', 'lead', 'climax'].includes(stateKey),
            trackSpeed,
            heroCenterX
          );
          this.updateFinalistRunner(
            this.secondRunner,
            deltaSeconds,
            runnerSpeed,
            stateKey,
            ['goal', 'lead', 'climax'].includes(stateKey),
            trackSpeed,
            heroCenterX
          );
        }
        this.updateOthers(
          deltaSeconds,
          runnerSpeed,
          stateKey,
          ['goal', 'lead', 'climax'].includes(stateKey),
          trackSpeed,
          heroCenterX
        );
        if (stateKey !== 'finish') {
          this.updateRunnerAnimation(this.heroRunner, deltaSeconds);
          this.updateRunnerAnimation(this.secondRunner, deltaSeconds);
          this.updateRunnerAnimation(this.thirdRunner, deltaSeconds);
        }
      }
      updateOthers(
        deltaSeconds,
        runnerSpeed,
        stateKey,
        maintainRelative,
        trackSpeed,
        heroCenterX
      ) {
        this.otherRunners.forEach((runner) => {
          if (!runner.active) return;
          if (stateKey === 'climax' && this.isClimaxContender(runner)) {
            return;
          }
          if (!runner.allowedToPass && stateKey === 'others' && this.stateElapsedMs >= (runner.passDelay ?? 0)) {
            runner.allowedToPass = true;
          }
          if (!runner.allowedToPass) {
            const offset = runner.packAlignOffset ?? this.passMargin * 1.2;
            const desiredCenter = heroCenterX + offset;
            this.alignRunnerToCenter(runner, desiredCenter, deltaSeconds);
            runner.opacity = 1;
            runner.fading = false;
            runner.fadeElapsed = 0;
            this.updateRunnerAnimation(runner, deltaSeconds);
            return;
          }
          const dynamicFactor = this.resolveDynamicFactor(runner, stateKey);
          let desired = maintainRelative
            ? this.goalAdjustedRunnerSpeed(dynamicFactor, trackSpeed, runnerSpeed)
            : runnerSpeed * dynamicFactor;
          desired = this.clampRunnerSpeed(desired, trackSpeed);
          runner.x -= desired * deltaSeconds;
          const runnerCenter = runner.x + runner.width / 2;
          if (!runner.passed && runnerCenter <= heroCenterX - this.passMargin) {
            runner.passed = true;
            runner.speedFactor = Math.max(
              0.74,
              (runner.speedFactor ?? dynamicFactor) * 0.9
            );
            runner.baseFactor = runner.speedFactor;
          }
          this.applyRunnerFadeOut(runner, deltaSeconds);
        });
      }

      alignRunnerToCenter(runner, desiredCenter, deltaSeconds) {
        if (!runner) return;
        const currentCenter = runner.x + runner.width / 2;
        const rate = Math.min(1, deltaSeconds * RACE_OTHER_PACK_FOLLOW_RATE);
        runner.x += (desiredCenter - currentCenter) * rate;
      }

      applyRunnerFadeOut(runner, deltaSeconds) {
        if (!runner) return;
        const beyondLeft = runner.x + runner.width < -this.passMargin;
        if (beyondLeft && !runner.fading && !runner.exited) {
          runner.fading = true;
          runner.fadeElapsed = 0;
          runner.fadeDuration = randomRange(
            RACE_OTHER_EXIT_FADE_MS[0],
            RACE_OTHER_EXIT_FADE_MS[1]
          );
        }
        if (runner.fading) {
          runner.fadeElapsed += deltaSeconds * 1000;
          const duration = Math.max(runner.fadeDuration || 1, 1);
          const ratio = Math.min(1, runner.fadeElapsed / duration);
          runner.opacity = Math.max(0, 1 - ratio);
          if (runner.fadeElapsed >= duration) {
            runner.exited = true;
            runner.active = false;
            runner.opacity = 0;
          }
        } else {
          runner.opacity = 1;
        }
      }

      goalAdjustedRunnerSpeed(speedFactor, trackSpeed, defaultSpeed) {
        if (!Number.isFinite(speedFactor) || speedFactor <= 0) {
          return defaultSpeed;
        }
        const blend = RACE_GOAL_RELATIVE_BLEND;
        if (blend <= 0) {
          return defaultSpeed;
        }
        const baselineGround = this.baseSpeed * RACE_PARALLAX_GROUND;
        const baselineRunner = this.baseSpeed * speedFactor;
        const desiredVisible = Math.max(
          this.relativeAdvanceSpeed,
          baselineGround - baselineRunner
        );
        const currentGround = trackSpeed * RACE_PARALLAX_GROUND;
        const denominator = Math.max(speedFactor, 0.0001);
        const compensated = (currentGround - desiredVisible) / denominator;
        const clampedTarget = this.clampRunnerSpeed(compensated, trackSpeed);
        const minSpeed = this.clampRunnerSpeed(defaultSpeed * 0.5, trackSpeed);
        const target = Math.max(minSpeed, clampedTarget);
        if (blend >= 1) {
          return target;
        }
        const blended = defaultSpeed + (target - defaultSpeed) * blend;
        return this.clampRunnerSpeed(Math.max(minSpeed, blended), trackSpeed);
      }

      clampRunnerSpeed(desiredSpeed, trackSpeed) {
        if (!Number.isFinite(desiredSpeed) || desiredSpeed <= 0) {
          return 0;
        }
        const groundSpeed = trackSpeed * RACE_PARALLAX_GROUND;
        if (!Number.isFinite(groundSpeed)) {
          return Math.max(0, desiredSpeed);
        }
        const minAdvance = this.relativeAdvanceSpeed || 0;
        if (groundSpeed <= minAdvance) {
          return Math.max(0, Math.min(desiredSpeed, groundSpeed * 0.6));
        }
        const maxAllowed = Math.max(0, groundSpeed - minAdvance);
        return Math.max(0, Math.min(desiredSpeed, maxAllowed));
      }

      lockCameraToGoal() {
        if (this.finishCameraLocked) {
          return;
        }
        const rawGateX = this.goal && Number.isFinite(this.goal.x)
          ? this.goal.x
          : this.goalCenterX;
        const gateCenter = Number.isFinite(rawGateX)
          ? rawGateX
          : this.stageWidth * RACE_GOAL_TARGET_RATIO;
        const viewportCenter = this.stageWidth * 0.5;
        const desiredPan = viewportCenter - gateCenter;
        this.finishCameraPan = Math.min(0, desiredPan);
        this.finishCameraLocked = true;
        this.setTrackPan(this.finishCameraPan, this.panBaseY);
      }

      canRunnerOvertake(label, stateKey) {
        switch (label) {
          case 'third':
            return ['third', 'second', 'lead', 'goal', 'finish'].includes(stateKey);
          case 'second':
            return ['second', 'lead', 'goal', 'finish'].includes(stateKey);
          default:
            return true;
        }
      }
      updateFinalistRunner(
        runner,
        deltaSeconds,
        runnerSpeed,
        stateKey,
        maintainRelative,
        trackSpeed,
        heroCenterX
      ) {
        if (!runner || runner.runOut) return;
        const canPass = this.canRunnerOvertake(runner.label, stateKey);
        if (!canPass) {
          const holdOffset =
            runner.holdOffset != null
              ? runner.holdOffset
              : this.passMargin * (runner.label === 'third' ? 0.8 : 1);
          const desiredCenter = heroCenterX + holdOffset;
          this.alignRunnerToCenter(runner, desiredCenter, deltaSeconds);
          runner.passed = false;
          this.updateRunnerAnimation(runner, deltaSeconds);
          return;
        }
        const dynamicFactor = this.resolveDynamicFactor(runner, stateKey);
        let desired = maintainRelative
          ? this.goalAdjustedRunnerSpeed(dynamicFactor, trackSpeed, runnerSpeed)
          : runnerSpeed * dynamicFactor;
        desired = this.clampRunnerSpeed(desired, trackSpeed);
        runner.x -= desired * deltaSeconds;
        const runnerCenter = runner.x + runner.width / 2;
        if (!runner.passed && runnerCenter <= heroCenterX - this.passMargin) {
          runner.passed = true;
          runner.speedFactor = Math.min(1.05, Math.max(0.9, runner.speedFactor ?? dynamicFactor));
          runner.baseFactor = runner.speedFactor;
        }
        if (runner.x + runner.width < -this.passMargin) {
          runner.exited = true;
        }
        this.updateRunnerAnimation(runner, deltaSeconds);
      }

      updateGoalState(duration) {
        if (!this.goal || !this.goal.active) return;
        const progress = Math.min(1, this.stateElapsedMs / duration);
        const eased = easeInQuad(progress);
        this.goal.progress = eased;
        this.goal.x = this.goal.startX + (this.goal.targetX - this.goal.startX) * eased;
        this.goalCenterX = this.goal.x;
        if (progress >= 1) {
          this.goal.stopped = true;
        }
      }

      updateFinishState(deltaSeconds) {
        const runners = [this.heroRunner, this.secondRunner, this.thirdRunner];
        runners.forEach((runner) => {
          if (!runner) return;
          if (!runner.runOut && this.stateElapsedMs >= runner.launchDelay) {
            runner.runOut = true;
          }
          if (runner.runOut) {
            runner.x += runner.runSpeed * deltaSeconds;
            const runnerCenter = runner.x + runner.width / 2;
            if (
              !runner.badgeTriggered &&
              runner.rankIndex != null &&
              runnerCenter >= this.goalCenterX
            ) {
              if (runner.rankIndex === 0) {
                this.lockCameraToGoal();
                this.triggerPhotoFinish();
              }
              markTekichuBadge(runner.rankIndex);
              runner.badgeTriggered = true;
            }
            if (runner.x > this.stageWidth + this.passMargin * 2) {
              runner.exited = true;
            }
          }
          this.updateRunnerAnimation(runner, deltaSeconds);
        });
      }

      updateRunnerAnimation(runner, deltaSeconds) {
        if (!runner) return;
        const stopImage = runner.frames?.stopImage || runner.image;
        const runImage = runner.frames?.runImage || stopImage;
        if (!isHorseAnimationEnabled()) {
          runner.currentImage = stopImage || runImage;
          runner.animationElapsed = 0;
          runner.isRunFrame = false;
          return;
        }
        const interval = runner.animationInterval ?? HORSE_ANIMATION_INTERVAL_MS.race;
        if (!Number.isFinite(interval) || interval <= 0) {
          runner.currentImage = stopImage || runImage;
          return;
        }
        runner.animationElapsed = (runner.animationElapsed || 0) + deltaSeconds * 1000;
        while (runner.animationElapsed >= interval) {
          runner.animationElapsed -= interval;
          runner.isRunFrame = !runner.isRunFrame;
        }
        runner.currentImage = runner.isRunFrame ? runImage : stopImage;
      }

      updateBackground(effectiveSpeed, deltaSeconds) {
        this.backgroundOffsets.sky += effectiveSpeed * RACE_PARALLAX_SKY * deltaSeconds;
        this.backgroundOffsets.bloom += effectiveSpeed * RACE_PARALLAX_SAKU * deltaSeconds;
        this.backgroundOffsets.ground += effectiveSpeed * RACE_PARALLAX_GROUND * deltaSeconds;
        if (this.markerSpacing > 0) {
          this.distanceMarkerOffset =
            (this.distanceMarkerOffset +
              effectiveSpeed * RACE_PARALLAX_GROUND * deltaSeconds) % this.markerSpacing;
        }
      }

      updateDust(trackSpeed, deltaSeconds) {
        const groundSpeed = Math.max(trackSpeed * RACE_PARALLAX_GROUND, 0);
        const spawnRate = RACE_DUST_BASE_RATE * this.dustRateMultiplier;
        this.dustAccumulator += spawnRate * deltaSeconds;
        while (this.dustAccumulator >= 1) {
          this.spawnDustParticle(groundSpeed);
          this.dustAccumulator -= 1;
        }
        this.dustParticles = this.dustParticles
          .map((particle) => {
            const lifeMs = particle.life - deltaSeconds * 1000;
            if (lifeMs <= 0) {
              return null;
            }
            const dx = (groundSpeed + particle.speedOffset) * deltaSeconds;
            return {
              ...particle,
              x: particle.x - dx,
              life: lifeMs
            };
          })
          .filter(Boolean)
          .slice(-RACE_DUST_MAX);
      }

      spawnDustParticle(groundSpeed) {
        if (!this.heroRunner) return;
        const groundTop = this.stageHeight - this.getGroundHeight();
        const size = randomRange(RACE_DUST_SIZE[0], RACE_DUST_SIZE[1]);
        const heroFootY = this.heroRunner.y + this.heroRunner.height - size * 0.2;
        const lifetime = randomRange(RACE_DUST_LIFETIME[0], RACE_DUST_LIFETIME[1]);
        const offsetX = randomRange(-32, 16) * this.stageScale;
        this.dustParticles.push({
          x: this.heroRunner.x + this.heroRunner.width + offsetX,
          y: Math.min(groundTop + size * 0.5, heroFootY),
          size,
          life: lifetime,
          maxLife: lifetime,
          speedOffset: randomRange(groundSpeed * 0.05, groundSpeed * 0.18)
        });
      }

      updateClimax(deltaSeconds, stateKey, trackSpeed) {
        if (!this.climaxActive || stateKey !== 'climax') {
          return;
        }
        const deltaMs = deltaSeconds * 1000;
        this.climaxTimer += deltaMs;
        this.queueDistanceTelops(deltaMs);
        this.updateDistanceTelops(deltaMs);
        if (!this.climaxShakeTriggered && this.climaxTimer >= this.climaxDurationMs * 0.7) {
          this.startShake(RACE_CLIMAX_SHAKE);
          this.climaxShakeTriggered = true;
        }

        const bobAmount = this.stageToCanvasY(RACE_CLIMAX_VERTICAL_BOB);
        const applyBob = (runner) => {
          if (!runner) return;
          const phase = this.timelineSeconds * 4 + (runner.wavePhase ?? 0);
          runner.visualOffsetY = Math.sin(phase) * bobAmount;
        };
        applyBob(this.heroRunner);
        applyBob(this.secondRunner);
        applyBob(this.thirdRunner);
        if (this.otherRunners) {
          this.otherRunners.forEach((runner) => applyBob(runner));
        }

        if (this.climaxReliefTimer > 0) {
          this.climaxReliefTimer = Math.max(0, this.climaxReliefTimer - deltaMs);
        }
        const heroCenter = this.heroRunner
          ? this.heroRunner.x + this.heroRunner.width / 2
          : 0;
        this.updateClimaxContenders(deltaSeconds, heroCenter);
      }
      updateCamera(deltaSeconds, stateKey) {
        this.updateCameraFollow(deltaSeconds, stateKey);
        if (!this.shakeConfig) return;
        const { amplitude, duration, repeats } = this.shakeConfig;
        if (duration <= 0 || repeats <= 0) {
          this.setTrackShake(0, 0);
          this.shakeConfig = null;
          return;
        }
        this.shakeTimer += deltaSeconds;
        this.shakeTotal += deltaSeconds;
        if (this.shakeTotal >= duration * repeats) {
          this.setTrackShake(0, 0);
          this.shakeConfig = null;
          return;
        }
        const progress = (this.shakeTimer % duration) / duration;
        const angle = progress * Math.PI * 2;
        const shakeX = Math.sin(angle) * amplitude;
        const shakeY = Math.cos(angle) * amplitude * 0.5;
        this.setTrackShake(shakeX, shakeY);
      }

      updateCameraFollow(deltaSeconds, stateKey) {
        if (this.finishCameraLocked) {
          this.setTrackPan(this.finishCameraPan, this.panBaseY);
          return;
        }
        if (!this.heroRunner) {
          return;
        }
        const anchor = this.stageWidth * RACE_CAMERA_FOLLOW_ANCHOR;
        const heroCenter = this.heroRunner.x + this.heroRunner.width / 2;
        const desiredPanX = this.panBaseX + (anchor - heroCenter);
        const strength =
          RACE_CAMERA_FOLLOW_STRENGTH[stateKey] ?? this.cameraFollowStrength ?? RACE_CAMERA_FOLLOW_STRENGTH.default;
        const rate = Math.max(0, strength);
        const alpha = rate > 0 ? 1 - Math.exp(-rate * deltaSeconds) : 1;
        this.panX += (desiredPanX - this.panX) * alpha;
        this.panY = this.panBaseY;
        this.setTrackPan(this.panX, this.panY);
      }
    
      resolveRunnerSpeed(stateKey, trackSpeed) {
        return trackSpeed;
      }
    
      resolveDynamicFactor(runner, stateKey) {
        if (!runner) return 1;
        let factor = runner.speedFactor ?? 1;
        const paceTable = RACE_PACE_MODIFIERS[stateKey];
        if (paceTable && runner.legType && paceTable[runner.legType] != null) {
          factor *= paceTable[runner.legType];
        }
        const amplitude = runner.waveAmplitude ?? 0;
        if (!runner.fixed && amplitude > 0) {
          const frequency = runner.waveFrequency ?? RACE_SURGE_FREQUENCY;
          const phase = runner.wavePhase ?? 0;
          const wave = Math.sin((this.timelineSeconds * frequency + phase) * Math.PI * 2);
          factor += wave * amplitude;
        }
        if (stateKey === 'climax' && runner.legType) {
          const pulseFreq = RACE_CLIMAX_PULSE_FREQ[runner.legType] ?? 2.4;
          const pulseAmp = RACE_CLIMAX_PULSE_AMP[runner.legType] ?? 0.05;
          const pulse = Math.sin((this.timelineSeconds * pulseFreq + (runner.wavePhase ?? 0)) * Math.PI * 2);
          factor *= 1 + pulse * pulseAmp;
        }
        if (runner.boosted) {
          factor += 0.06;
        }
        if (!runner.fixed && this.speedMultiplier > 1 && this.isBoostableState()) {
          const boost = this.speedMultiplier - 1;
          const relief = this.afterStraight
            ? RACE_SPEEDUP_STRAIGHT_RELIEF
            : RACE_SPEEDUP_RELIEF;
          const sensitivity = runner.boostSensitivity ?? 1;
          factor -= boost * relief * sensitivity;
        }
        if (stateKey === 'climax' && this.climaxReliefDuration > 0) {
          const reliefRatio = this.climaxReliefTimer > 0 ? this.climaxReliefTimer / this.climaxReliefDuration : 0;
          if (runner.label === 'hero') {
            factor += RACE_CLIMAX_HERO_BOOST * reliefRatio;
          } else if (!runner.fixed) {
            const relief = RACE_CLIMAX_OTHERS_RELIEF * reliefRatio * (runner.boostSensitivity ?? 1);
            factor -= relief;
          }
        }
        if (runner.runOut) {
          return Math.max(RACE_MIN_SPEED_FACTOR, Math.min(RACE_MAX_SPEED_FACTOR, factor));
        }
        return Math.max(RACE_MIN_SPEED_FACTOR, Math.min(RACE_MAX_SPEED_FACTOR, factor));
      }
    
      render() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.drawBackground();
        this.drawDistanceMarkers();
        this.drawDust();
        this.drawRunners();
        this.drawGoal();
        this.drawPhotoFinish();
      }
    
      drawBackground() {
        const skyImg = this.resolveImage(RACE_ASSET_PATHS.sky);
        const bloomImg = this.resolveImage(RACE_ASSET_PATHS.bloom);
        const groundImg = this.resolveImage(RACE_ASSET_PATHS.ground);
        const groundHeight = this.getGroundHeight();
        const bloomHeight = RACE_BACKGROUND_BLOOM_HEIGHT * this.stageScale;
        const skyHeight = Math.max(this.stageHeight - groundHeight, RACE_BACKGROUND_SKY_HEIGHT * this.stageScale);
        const groundTop = this.stageHeight - groundHeight;
        const bloomTop = groundTop - bloomHeight;
    
        if (skyImg) {
          this.drawTiledLayer(skyImg, 0, skyHeight, this.backgroundOffsets.sky);
        } else {
          this.ctx.fillStyle = '#b9e2ff';
          this.ctx.fillRect(0, 0, this.stageWidth, skyHeight);
        }
    
        if (bloomImg) {
          this.drawTiledLayer(bloomImg, bloomTop, bloomHeight, this.backgroundOffsets.bloom);
        }
    
        if (groundImg) {
          this.drawTiledLayer(groundImg, groundTop, groundHeight, this.backgroundOffsets.ground);
        } else {
          this.ctx.fillStyle = '#9ed9a3';
          this.ctx.fillRect(0, groundTop, this.stageWidth, groundHeight);
        }
      }
    
      drawTiledLayer(image, top, height, offset) {
        const aspect = image && image.height ? image.width / image.height : 1;
        const width = height * aspect;
        if (width <= 0) return;
        let x = -((offset % width) || 0);
        if (x > 0) {
          x -= width;
        }
        while (x < this.stageWidth) {
          this.ctx.drawImage(image, x, top, width, height);
          x += width;
        }
      }
    
      drawDistanceMarkers() {
        if (!this.ctx || !this.markerSpacing || this.markerSpacing <= 0) return;
        const groundHeight = this.getGroundHeight();
        const groundTop = this.stageHeight - groundHeight;
        const markerHeight = this.markerHeight || groundHeight * 0.25;
        const markerWidth = this.markerWidth || 6;
        const upper = groundTop - markerHeight;
        let x = -this.distanceMarkerOffset;
        while (x < this.stageWidth + this.markerSpacing) {
          const drawX = x - markerWidth / 2;
          this.ctx.fillStyle = RACE_DISTANCE_MARKER_BASE;
          this.ctx.fillRect(drawX, upper + markerHeight * 0.3, markerWidth, markerHeight * 0.7);
          this.ctx.fillStyle = RACE_DISTANCE_MARKER_COLOR;
          this.ctx.fillRect(drawX, upper, markerWidth, markerHeight);
          x += this.markerSpacing;
        }
      }
    
      drawDust() {
        if (!this.ctx || !this.dustParticles.length) return;
        this.dustParticles.forEach((particle) => {
          const lifeRatio = Math.max(0, Math.min(1, particle.life / particle.maxLife));
          const alpha = Math.min(0.4, 0.15 + (1 - lifeRatio) * 0.25);
          const size = particle.size * this.stageScale;
          this.ctx.save();
          this.ctx.globalAlpha = alpha;
          const gradient = this.ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            size
          );
          gradient.addColorStop(0, 'rgba(255, 248, 220, 0.8)');
          gradient.addColorStop(1, 'rgba(255, 248, 220, 0)');
          this.ctx.fillStyle = gradient;
          this.ctx.beginPath();
          this.ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.restore();
        });
      }
    
      drawRunners() {
        const runners = [];
        this.otherRunners.forEach((runner) => {
          if (runner.spawned && !runner.exited) {
            runners.push(runner);
          }
        });
        [this.thirdRunner, this.secondRunner, this.heroRunner].forEach((runner) => {
          if (runner && !runner.exited) {
            runners.push(runner);
          }
        });
        runners.sort((a, b) => a.y + a.height - (b.y + b.height));
        runners.forEach((runner) => {
          const image = runner.currentImage || runner.frames?.stopImage || runner.image;
          if (!image) return;
          const drawX = runner.x + (runner.visualOffsetX || 0);
          const drawY = runner.y + (runner.visualOffsetY || 0);
          const opacity = runner.opacity != null ? runner.opacity : 1;
          if (opacity <= 0) {
            return;
          }
          this.ctx.save();
          this.ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
          if (runner.label === 'hero') {
            this.ctx.shadowColor = 'rgba(255, 255, 255, 0.75)';
            this.ctx.shadowBlur = this.stageToCanvasX(6);
          }
          this.ctx.drawImage(image, drawX, drawY, runner.width, runner.height);
          this.ctx.restore();
        });
      }
    
      drawGoal() {
        if (!this.goal || !this.goal.active || !this.goal.image) return;
        const x = this.goal.x - this.goal.width / 2;
        this.ctx.drawImage(this.goal.image, x, this.goal.y, this.goal.width, this.goal.height);
      }
    
      drawPhotoFinish() {
        if (!this.photoFinishActive || this.photoFinishTimer <= 0) return;
        const ratio = this.photoFinishTimer / RACE_PHOTO_LINE_DURATION_MS;
        const alpha = Math.max(0, Math.min(1, ratio));
        const lineWidth = Math.max(2, this.stageToCanvasX(4));
        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(this.goalCenterX - lineWidth / 2, 0, lineWidth, this.stageHeight);
        this.ctx.restore();
      }
    
      resolveRunnerFrames(horse) {
        const frames = horse ? getHorseFramesForId(horse.id) : { stop: placeholderHorseSrc, run: placeholderHorseSrc };
        const stopImage = frames.stop ? this.resolveImage(frames.stop) : null;
        const runImage = frames.run ? this.resolveImage(frames.run) : null;
        const fallback = horse?.img ? this.resolveImage(horse.img) : this.resolveImage(placeholderHorseSrc);
        return {
          stopSrc: frames.stop,
          runSrc: frames.run,
          stopImage: stopImage || fallback,
          runImage: runImage || stopImage || fallback
        };
      }
    
      createRunner(horse, options = {}) {
        const data = horse || createPlaceholderHorse(options.label || 'runner');
        const frameImages = this.resolveRunnerFrames(data);
        const baseImage = frameImages.stopImage || frameImages.runImage || this.resolveImage(data.img);
        const height = this.runnerHeight;
        const aspect = baseImage && baseImage.height ? baseImage.width / baseImage.height : 1;
        const width = height * aspect;
        const groundTop = this.stageHeight - this.getGroundHeight();
        const defaultX = options.x ?? this.stageWidth + width;
        const defaultY = options.y ?? groundTop - height;
        return {
          horse: data,
          image: baseImage,
          x: defaultX,
          y: defaultY,
          baseX: defaultX,
          baseY: defaultY,
          width,
          height,
          frames: frameImages,
          currentImage: baseImage,
          animationElapsed: 0,
          animationInterval: HORSE_ANIMATION_INTERVAL_MS.race,
          isRunFrame: false,
          speedFactor: options.speedFactor ?? 1,
          baseFactor: options.speedFactor ?? 1,
          active: options.active ?? true,
          spawnTime: options.spawnTime ?? 0,
          spawned: options.active ?? true,
          passed: false,
          exited: false,
          fixed: options.fixed ?? false,
          runOut: false,
          launchDelay: 0,
          runSpeed: this.finishSpeed,
          label: options.label ?? 'runner',
          rankIndex: options.rankIndex ?? null,
          badgeTriggered: false,
          allowedToPass: options.allowedToPass ?? true,
          packAlignOffset: options.packAlignOffset ?? 0,
          passDelay: options.passDelay ?? 0,
          passDelayBase: options.passDelayBase ?? 0,
          passDelayJitter: options.passDelayJitter ?? 0,
          holdOffset: options.holdOffset ?? null,
          laneIndex: options.laneIndex ?? null,
          rowIndex: options.rowIndex ?? null,
          slotIndex: options.slotIndex ?? null,
          legType: options.legType ?? 'front',
          wavePhase: options.wavePhase ?? Math.random() * Math.PI * 2,
          waveAmplitude: options.waveAmplitude ?? (options.fixed ? 0 : RACE_SURGE_AMPLITUDE),
          waveFrequency: options.waveFrequency ?? RACE_SURGE_FREQUENCY,
          boostSensitivity: options.boostSensitivity ?? (options.fixed ? 0 : 1),
          boosted: options.boosted ?? false,
          visualOffsetX: 0,
          visualOffsetY: 0,
          opacity: 1,
          fading: false,
          fadeElapsed: 0,
          fadeDuration: 0
        };
      }
    
      resolveImage(path) {
        if (path && raceAssetCache.has(path)) {
          return raceAssetCache.get(path);
        }
        if (raceAssetCache.has(placeholderHorseSrc)) {
          return raceAssetCache.get(placeholderHorseSrc);
        }
        return null;
      }
    
      getGroundHeight() {
        return Math.max(0, RACE_BACKGROUND_GROUND_HEIGHT * this.stageScale);
      }
    
      stageToCanvasX(value) {
        return (value / STAGE_RATIO_W) * this.stageWidth;
      }
    
      stageToCanvasY(value) {
        return (value / RACE_STAGE_BASE_HEIGHT) * this.stageHeight;
      }
    
      toCanvasX(value) {
        return (value / RACE_VIRTUAL_WIDTH) * this.stageWidth;
      }
    
      toCanvasY(value) {
        return (value / RACE_VIRTUAL_HEIGHT) * this.stageHeight;
      }
    
      toCanvasSpeed(value) {
        return (value / RACE_VIRTUAL_WIDTH) * this.stageWidth;
      }
    
      canAdvance(stateKey) {
        switch (stateKey) {
          case 'others':
            return this.otherRunners.every((runner) => !runner.spawned || runner.passed);
          case 'third':
            return !this.thirdRunner || this.thirdRunner.passed;
          case 'second':
            return !this.secondRunner || this.secondRunner.passed;
          case 'goal':
            return this.goal ? this.goal.stopped : true;
          case 'finish':
            return [this.heroRunner, this.secondRunner, this.thirdRunner]
              .filter(Boolean)
              .every((runner) => runner.exited);
          default:
            return true;
        }
      }
    
      triggerSpeedUp() {
        if (!this.running || !this.isBoostableState() || this.speedBoostRemaining > 0) {
          return;
        }
        const straightBonus = this.afterStraight ? RACE_SPEEDUP_STRAIGHT_BONUS : 1;
        this.speedMultiplier = SPEED_UP_MULTIPLIER * straightBonus;
        this.speedBoostRemaining = SPEED_UP_DURATION_MS / 1000;
        this.refreshSpeedControl();
        this.startSpeedEffects();
        const stateKey = this.sequence[this.stateIndex]?.key;
        if (stateKey === 'climax') {
          this.activateClimaxBoost();
        }
      }
    
      completeRace() {
        if (!this.running) return;
        this.running = false;
        this.refreshSpeedControl();
        this.stopSpeedEffects();
        if (this.rafId !== null) {
          cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
        setTimeout(() => {
          finishRace();
        }, 400);
      }
    }
    
    async function detectSilhouetteSource() {
      for (const candidate of SILHOUETTE_CANDIDATES) {
        if (await assetExists(candidate)) {
          placeholderHorseSrc = candidate;
          break;
        }
      }
      updateSelectionSlots();
      refreshCardAnimations();
    }

    function assetExists(src) {
      return new Promise((resolve) => {
        if (!src) {
          resolve(false);
          return;
        }
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });
    }

    function loadImage(src) {
      return new Promise((resolve) => {
        const image = new Image();
        image.decoding = 'async';
        image.onload = () => resolve([src, image]);
        image.onerror = (error) => {
          console.warn('[race] 画像の読み込みに失敗しました', src, error);
          resolve([src, null]);
        };
        image.src = src;
      });
    }
    
    function easeOutQuad(t) {
      return 1 - (1 - t) * (1 - t);
    }
    
    function easeInQuad(t) {
      return t * t;
    }
    
    function shuffleArray(source) {
      const array = Array.isArray(source) ? [...source] : [];
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    function randomRange(min, max) {
      if (!Number.isFinite(min) || !Number.isFinite(max)) return min || 0;
      if (min > max) [min, max] = [max, min];
      return min + Math.random() * (max - min);
    }
    
    function finishRace() {
      populateResult();
      switchScreen('result');
    }
    
    function populateResult() {
      unregisterHorseImagesIn(resultList);
      resultList.innerHTML = '';
      selectedOrder.forEach((horseId, index) => {
        const horse = horses.find((h) => h.id === horseId);
        if (!horse) return;
        const item = document.createElement('li');
        item.className = 'result-item';
        const crown = document.createElement('img');
        crown.className = 'result-crown';
        crown.src = crownImages[index] || crownImages[crownImages.length - 1];
        crown.alt = `${index + 1}着の王冠アイコン`;
        const img = document.createElement('img');
        img.className = 'result-horse';
        const frames = getHorseFramesForId(horse.id);
        setImageSrc(img, frames.stop);
        registerHorseImageElement(horse.id, img);
        img.alt = `${horse.name}のアイコン`;
        const rank = document.createElement('span');
        rank.className = 'result-rank';
        rank.textContent = `${index + 1}着`;
        const nameWrap = document.createElement('span');
        nameWrap.className = 'result-name';
        if (horse.resultNameImg) {
          const nameImg = document.createElement('img');
          nameImg.className = 'result-name-img';
          nameImg.src = horse.resultNameImg;
          nameImg.alt = '';
          nameImg.setAttribute('aria-hidden', 'true');
          nameWrap.append(nameImg);
          const srText = document.createElement('span');
          srText.className = 'sr-only';
          srText.textContent = horse.name;
          nameWrap.append(srText);
        } else {
          nameWrap.textContent = horse.name;
        }
        item.append(crown, img, nameWrap, rank);
        resultList.append(item);
      });
    }
    
    // ---------------------------------------------
    // 補助：スクリーン切替でスクロール位置を調整
    // ---------------------------------------------
    const observer = new MutationObserver(() => {
      if (!app) return;
      app.scrollTo({ top: 0, behavior: 'smooth' });
    });
    observer.observe(app, { attributes: true, attributeFilter: ['data-screen'] });
  