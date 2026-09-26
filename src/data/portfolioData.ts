import { DeveloperProfile, Project } from '../types/portfolio';

export const developerProfile: DeveloperProfile = {
  name: 'David Sokeye',
  role: 'Mobile Software Engineer',
  subRole: 'WWDC26 Distinguished Winner',
  availability: 'Open for Remote Roles & High-Impact Contracts',
  bio: 'Mobile Software Engineer and WWDC26 Distinguished Winner. I build high-performance iOS and Android applications with offline-first architectures, autonomous AI integrations, and local-first cryptography—shipping cross-platform apps with zero performance compromises.',
  contactEmail: 'oladimejidavid91@gmail.com',
  githubUrl: 'https://github.com/dayveedd',
  linkedinUrl: 'https://www.linkedin.com/in/david-sokeye-7935a2250/',
};

export const projects: Project[] = [
  {
    id: 'papyr',
    number: '.01',
    title: 'papyr',
    category: 'ai receipt tracking',
    tagline: 'Intelligent Subscription & Recurring Spend Intelligence',
    context: 'Subscription tracking application',
    highlight: 'AI receipt processing with on-device VisionKit and zero-latency parsing',
    architectureDetails: [
      'Multi-modal pipeline pairing CoreML OCR on-device parsing with serverless LLM token-extraction to process physical & digital receipts in under 420ms.',
      'Offline-first synchronization layer using SQLite + CRDTs ensuring real-time budget forecasting across multiple iOS devices without conflict.',
      'SwiftUI declarative UI architecture with custom Metal shaders for subtle interactive card fluid dynamics and Apple Wallet pass exports.'
    ],
    techStack: ['Swift', 'SwiftUI', 'VisionKit', 'CoreML', 'StoreKit 2', 'CloudKit', 'FastAPI'],
    badges: [
      { label: 'app store live', type: 'app-store', url: 'https://apps.apple.com/app/papyr-subscription-tracker/id6797100760' },
      { label: 'distinguished build', type: 'award' }
    ],
    metrics: [
      { label: 'downloads', value: '< 1000' },
      { label: 'app store rating', value: '4.9 ★' },
      { label: 'ocr accuracy', value: '99.4%' }
    ],
    appStoreUrl: 'https://apps.apple.com/app/papyr-subscription-tracker/id6797100760',
    githubUrl: 'https://github.com/dayveedd/papyr',
    images: [
      '/assets/images/papyr1.png',
      '/assets/images/papyr2.png',
      '/assets/images/papyr3.png',
      '/assets/images/papyr4.png'
    ],
    featured: true
  },
  {
    id: 'outside',
    number: '.02',
    title: 'outside',
    category: 'habit education & skia',
    tagline: 'Adaptive Micro-Learning & Habit Formation Engine',
    context: 'Educational mobile app',
    highlight: 'Multidisciplinary daily lessons and habit-tracking architecture at 120 FPS',
    architectureDetails: [
      'Spaced repetition memory algorithms built on an ephemeral state machine that dynamically calculates lesson difficulty curves based on user retention velocity.',
      'Custom habit completion ring animations rendered with Flutter Skia engine at an unthrottled 120 FPS on ProMotion screens.',
      'Local-first encrypted persistence with background app refresh tasks that ingest daily micro-curriculums seamlessly without network wait times.'
    ],
    techStack: ['Flutter', 'Dart', 'BLoC Pattern', 'SQLite', 'RevenueCat', 'PushKit'],
    badges: [
      { label: 'app store live', type: 'app-store', url: 'https://apple.co/4j0khob' },
      { label: '120 fps skia', type: 'live' }
    ],
    metrics: [
      { label: 'downloads', value: '< 1000' },
      { label: 'd30 retention', value: '46%' },
      { label: 'frame rate', value: '120 fps' }
    ],
    appStoreUrl: 'https://apple.co/4j0khob',
    githubUrl: 'https://github.com/dayveedd/outside',
    images: [
      '/assets/images/outside1.png',
      '/assets/images/outside2.png',
      '/assets/images/outside3.png',
      '/assets/images/outside4.png',
      '/assets/images/outside5.png'
    ],
    featured: true
  },
  {
    id: 'digital-ocean-uploader',
    number: '.03',
    title: 'digital_ocean_uploader',
    category: 'pure dart s3/spaces sdk',
    tagline: 'Lightweight Pure-Dart DigitalOcean Spaces REST SDK for Flutter',
    context: 'Open-source Flutter package built by David Sokeye',
    highlight: 'Pure-Dart AWS V4 request signer and direct Spaces uploader eliminating bloated AWS dependencies',
    architectureDetails: [
      'Authored pure Dart cryptographic AWS V4 signature generator (HMAC-SHA256) running seamlessly across iOS, Android, macOS, Linux, Windows, and Web.',
      'Completely eliminates heavy AWS SDK binaries, reducing final Flutter bundle size by up to 14MB while enabling zero-latency chunked uploads.',
      'Designed with dependency-injected mockable http.Client primitives, guaranteeing 100% test coverage and isolated unit testing.'
    ],
    techStack: ['Dart', 'Flutter', 'HMAC-SHA256', 'REST API', 'pub.dev', 'DigitalOcean Spaces'],
    badges: [
      { label: 'pub.dev verified', type: 'pub', url: 'https://pub.dev/packages/digital_ocean_uploader' },
      { label: 'pure dart', type: 'live' }
    ],
    metrics: [
      { label: 'peak weekly downloads', value: '78' },
      { label: 'low weekly downloads', value: '8' },
      { label: 'platforms supported', value: '6 / 6' }
    ],
    liveUrl: 'https://pub.dev/packages/digital_ocean_uploader',
    githubUrl: 'https://github.com/dayveedd',
    images: [
      '/assets/images/pubdev.png'
    ]
  },
  {
    id: 'trailwire',
    number: '.04',
    title: 'trailwire',
    category: 'topographic gps core',
    tagline: 'Sub-Meter Topographic GPS Tracker & Offline Mesh',
    context: 'Hiking/GPS tracking app',
    highlight: 'CoreLocation and real-time mapping constraints with 64% battery reduction',
    architectureDetails: [
      'Intelligent sensor fusion coordinating CoreLocation, barometer, and accelerometer to throttle GPS polling dynamically from 1Hz to 0.1Hz based on user motion state, cutting battery consumption by 64%.',
      'Vector tile rendering pipeline with offline MBTiles caching, allowing fluid topographic contours and altitude profiles in zero-connectivity wilderness.',
      'Peer-to-peer Bluetooth Low Energy (BLE) peripheral/central mesh relay for broadcasting SOS pings and beacon coordinates.'
    ],
    techStack: ['Swift', 'CoreLocation', 'MapLibre GL', 'CoreMotion', 'BLE Multipeer', 'Combine'],
    badges: [
      { label: 'corelocation engine', type: 'live' },
      { label: '-64% battery', type: 'award' }
    ],
    metrics: [
      { label: 'battery saved', value: '-64%' },
      { label: 'offline maps', value: '100% local' },
      { label: 'location jitter', value: '< 0.8m' }
    ],
    githubUrl: 'https://github.com/dayveedd/trailwire',
    images: [
      '/assets/images/trailwire1.png',
      '/assets/images/trailwire2.png',
      '/assets/images/trailwire3.png'
    ]
  },
  {
    id: 'vido-vault',
    number: '.05',
    title: 'vido vault',
    category: 'secure enclave crypto',
    tagline: 'Non-Custodial Web3 Vault with MFA & Hardware Biometrics',
    context: 'Non-custodial cryptographic key vault & Web3 wallet',
    highlight: 'Engineered with Dart, Web3Auth, Google Authenticator MFA, and hardware biometrics (FaceID/Fingerprint)',
    architectureDetails: [
      'Hardware biometric isolation (FaceID & Fingerprint) backed by native iOS LocalAuthentication and Android BiometricPrompt for zero-knowledge transaction signing.',
      'Multi-factor authentication (MFA) layer pairing RFC 6238 TOTP Google Authenticator tokens with on-device cryptographic key fragment derivation.',
      'Web3Auth non-custodial threshold architecture combining social logins with client-side BIP-39 mnemonic seed phrase reconstruction without central custody.'
    ],
    techStack: ['Flutter', 'Dart', 'Web3Auth', 'Google Authenticator MFA', 'Biometrics (FaceID / Fingerprint)', 'BIP-39 Seed Phrases', 'LocalAuthentication'],
    badges: [
      { label: 'biometrics + mfa', type: 'live' },
      { label: 'web3auth non-custodial', type: 'award' }
    ],
    metrics: [
      { label: 'mfa layer', value: 'google auth' },
      { label: 'biometrics', value: 'faceid / touch' },
      { label: 'key protocol', value: 'web3auth + bip-39' }
    ],
    githubUrl: 'https://github.com/dayveedd/vido-vault',
    images: [
      '/assets/images/vido1.png',
      '/assets/images/vido2.png',
      '/assets/images/vido3.png',
      '/assets/images/vido4.png'
    ]
  },
  {
    id: 'swiftpaar',
    number: '.06',
    title: 'swiftpaar',
    category: 'langgraph port agent',
    tagline: 'Autonomous Port Clearance & Demurrage Minimization Agent',
    context: 'Automated port clearance and demurrage optimization agent',
    highlight: 'FastAPI backend, LangGraph multi-agent orchestration, and operational React dashboard',
    architectureDetails: [
      'Multi-agent stateful graph built with LangGraph orchestrating custom clearance verification, tariff classification validation, and automated shipping manifest cross-checks.',
      'High-throughput asynchronous FastAPI backend handling multi-gigabyte bill of lading PDFs with Redis queue streaming and distributed worker pools.',
      'Tactile operations dashboard delivering live port congestion telemetry and predictive demurrage risk alerts 72 hours prior to fee incurrence.'
    ],
    techStack: ['Python', 'FastAPI', 'LangGraph', 'Redis', 'Docker', 'React', 'PostgreSQL'],
    badges: [
      { label: 'multi-agent graph', type: 'agent' },
      { label: 'fastapi + redis', type: 'live' }
    ],
    metrics: [
      { label: 'clearance speed', value: '-78%' },
      { label: 'demurrage saved', value: '$840k+' },
      { label: 'agent pipeline', value: '14 nodes' }
    ],
    githubUrl: 'https://github.com/dayveedd/swiftpaar',
    liveUrl: 'https://swiftpaar.io',
    images: [
      '/assets/images/swiftpaar1.png',
      '/assets/images/swiftpaar2.png',
      '/assets/images/swiftpaar3.png'
    ]
  },
  {
    id: 'auraops',
    number: '.07',
    title: 'auraops',
    category: 'slack autonomous agent (no ui)',
    tagline: 'Autonomous Headless Slack Agent with Paystack, Supabase & Auth0',
    context: 'Agent that lives in Slack with no UI',
    highlight: 'Makes payments via Paystack, schedules events in Calendar, writes to Supabase, and gets authorization from Auth0 for human in the loop operations',
    architectureDetails: [
      'Zero-UI autonomous agent living entirely inside Slack channels using the Slack Bolt Socket Mode API for conversational triggers and interactive Block Kit modals.',
      'Executes verified payment orders directly via the Paystack API with idempotency keys and multi-currency exchange handling.',
      'Automates appointment scheduling and resource reservation by interfacing with Google Calendar API and computing conflict-free calendar windows.',
      'Persists stateful audit logs, operation transcripts, and multi-tenant metadata in Supabase PostgreSQL with real-time row-level change streams.',
      'Enforces strict Human-in-the-Loop (HITL) guardrails: whenever a payment exceeds safety thresholds, the agent requests cryptographic authorization from Auth0 before proceeding.'
    ],
    techStack: ['Slack Bolt API', 'Paystack API', 'Google Calendar API', 'Supabase', 'Auth0 HITL', 'TypeScript', 'Node.js'],
    badges: [
      { label: 'lives in slack', type: 'agent' },
      { label: 'no ui / headless', type: 'live' },
      { label: 'auth0 human-in-the-loop', type: 'award' }
    ],
    metrics: [
      { label: 'slack execution', value: '< 200ms' },
      { label: 'supabase logs', value: '100% audited' },
      { label: 'hitl auth rate', value: '99.9%' }
    ],
    githubUrl: 'https://github.com/dayveedd/auraOps-ai-agent',
    images: [],
    hasNoUi: true
  }
];

export const craftPillars = [
  {
    number: '01',
    title: '120 FPS Fluidity & Tactile Physics',
    tagline: 'Zero-lag gestures on ProMotion displays',
    description: 'A mobile experience should feel like physical glass and paper. Whether engineering custom Metal shaders in SwiftUI or tuning the Flutter Skia/Impeller pipeline, every transition runs decoupled from business logic with unthrottled 120 FPS frame consistency.',
    details: ['Impeller / Skia custom rendering', 'Metal shader fluid surfaces', 'Sub-millisecond touch tracking']
  },
  {
    number: '02',
    title: 'Local-First & Offline Sovereignty',
    tagline: 'Network is an enhancement, not a dependency',
    description: 'Transient networks should never stall user intent. Every system is built local-first using SQLite, conflict-free CRDT data types, and on-device CoreML/VisionKit token extraction—allowing apps to function flawlessly without waiting on remote round-trips.',
    details: ['Conflict-Free Replicated Data Types', 'Sub-420ms on-device VisionKit OCR', 'Background task queue persistence']
  },
  {
    number: '03',
    title: 'Bare-Metal Security & Sensor Throttling',
    tagline: 'Hardware isolation meets battery conservation',
    description: 'Bridging high-level mobile frameworks directly to native hardware. From Apple Secure Enclave biometric isolation (FaceID/Fingerprint) and Google Authenticator TOTP to sensor-fusion algorithms that cut CoreLocation battery consumption by 64%.',
    details: ['Secure Enclave key isolation', 'Google Authenticator MFA', 'Dynamic sensor throttling (-64% battery)']
  },
  {
    number: '04',
    title: 'Zero-Bloat Open-Source Foundations',
    tagline: 'Lightweight pure-Dart architectural primitives',
    description: 'Respecting device memory, download sizes, and compilation speed. Authored digital_ocean_uploader to eliminate heavy multi-megabyte AWS SDKs, implementing pure-Dart HMAC-SHA256 AWS V4 signatures with 100% mockable test harnesses.',
    details: ['14MB+ app bundle size shaved', 'Pure Dart across 6 platforms', '100% mockable client testing']
  }
];
