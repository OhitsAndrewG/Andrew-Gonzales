export const profile = {
  name: "Andrew Gonzales",
  role: "Embedded Software Engineer",
  location: "San Diego, CA",
  email: "andrewg9@alumni.usc.edu",
  emailAlt: "andrew33gonzales@gmail.com",
  headshot: "head-shot.png",
  resume: { file: "Andrew_Gonzales_Resume.pdf", size: "53 KB" },
  summary: [
    "I am an embedded software engineer with 2+ years in embedded firmware and application software for industrial motion control: EtherCAT slave firmware on SSC-generated stacks (Infineon XMC4300/XMC4800), EtherNet/IP, DMA-driven real-time communication, and closed-loop PID tuning for voice-coil and brushless actuators.",
    "My firmware ships in production controllers used by industrial customers and European research programs. Alongside it I build the C# .NET desktop applications that configure, test, and diagnose those controllers.",
    "I hold a B.S. in Computer Science from the University of Southern California. Outside of work I build bare-metal STM32 and Raspberry Pi projects. I am open to firmware and embedded software roles.",
  ],
};

export const links = {
  github: "https://github.com/OhitsAndrewG",
  linkedin: "https://www.linkedin.com/in/andrewgonzales3322/",
  email: `mailto:${profile.email}`,
  emailAlt: `mailto:${profile.emailAlt}`,
};

export const experience = [
  {
    company: "SMAC Moving Coil Actuators",
    role: "Embedded Software Engineer",
    period: "June 2024 – Present",
    place: "Carlsbad, CA",
    highlights: [
      "Extended the SSC-generated EtherCAT slave stack on Infineon XMC4300/XMC4800 (Cortex-M4, integrated ESC) with File over EtherCAT (FoE), integrating mailbox handling into the VLC-ETC application layer for acyclic parameter updates and PID tuning data transfer",
      "Configured DMA for the Distributed Clock process data path and integrated it with the stack's SYNC0 handling to meet hard real-time deadlines; adapted the stack to bridge EtherCAT process data to the SMAC motion controller over UART",
      "Firmware ships in production VLC-ETC-402 controllers used by industrial customers and European research programs",
      "Modified and validated EtherCAT Slave Information (ESI) files, CoE object dictionary entries, and cyclic/acyclic PDO mappings for TwinCAT 3 integration",
      "Measured and validated EtherNet/IP cyclic latency across a five-node PLC chain, and contributed to a new IO-based control method that reduced per-unit cost for customers",
      "Developed C# .NET desktop applications (WinForms/WPF) for actuator control, automated data capture, and diagnostics: VLC-X Editor, Thread Check GUI, SMAC Simple GUI, and the VLC-ETC-402 and VLC-EIP configuration tools",
      "Validated actuators across platforms: phasing, HIPOT, closed-loop PID tuning, soft-land, force/velocity/position profiling, cycle testing, and high-resolution data capture",
    ],
    tech: "C, EtherCAT (SSC, CoE, FoE, DC), Infineon XMC, DMA, UART, TwinCAT 3, EtherNet/IP, C# .NET",
  },
];

export const skills = [
  {
    group: "Languages",
    items: "C, C++, C#, Python, JavaScript, TypeScript, Java, Swift, SQL, HTML, CSS",
  },
  {
    group: "Embedded",
    items:
      "ARM Cortex-M, STM32 (HAL, CMSIS, bare-metal), DMA, interrupt-driven design, timers / PWM / input capture, real-time control, PID and closed-loop control, UART, SPI, I2C, JTAG/SWD, STM32CubeMX, ST-Link, J-Link",
  },
  {
    group: "Industrial protocols",
    items:
      "EtherCAT (SSC slave stack, CoE, FoE, Distributed Clocks, ESI, Infineon XMC ESC), EtherNet/IP, TwinCAT 3, Logix 5000, HTTP/REST",
  },
  {
    group: "Software",
    items:
      "C# .NET (WinForms, WPF), React, Next.js, Express.js, Spring Boot, SwiftUI, REST APIs, OAuth 2.0, multithreading, PostgreSQL, Supabase, Firebase, Pillow, NumPy, Pandas, Matplotlib, OpenCV",
  },
  {
    group: "Tools",
    items:
      "Git, GNU Make, CMake, GDB, VS Code Cortex-Debug, Docker, Linux (Debian, systemd, SSH), Windows, macOS",
  },
];

export const projects = [
  {
    name: "Pan/Tilt Firmware",
    meta: "STM32F411, C — September 2026 to present",
    repo: "https://github.com/OhitsAndrewG/pan_tilt",
    description:
      "Bare-metal, fully non-blocking interrupt-driven firmware for a pan/tilt head. A Raspberry Pi 4 host carries the camera and drives the head over a single serial link. Servo PWM control and the Pi host software are in progress.",
    points: [
      "UART at 115200 with a 256-byte TX ring buffer and line-framed, bounds-checked RX",
      "HC-SR04 ranging via timer input capture at 1 microsecond resolution, with echo timeout and 10 Hz pacing",
      "KEY:VALUE serial protocol with OK/ERR acknowledgement and telemetry back to the Pi host",
      "GNUmakefile wrapper over the CubeMX-generated build adding flash, debug, and telemetry targets; SWD debugging with J-Link, GDB, and VS Code Cortex-Debug",
    ],
    tech: "C, STM32 HAL/CMSIS, CubeMX, GNU Make, J-Link",
  },
  {
    name: "Bare-Metal PWM on STM32F411",
    meta: "Register-level firmware, C",
    repo: "https://github.com/OhitsAndrewG/pwm-edge-aligned",
    description:
      "Hardware PWM configured directly against the registers — no HAL, no LL drivers, no CubeMX output. Eleven register writes produce a 50 Hz signal on PA1 whose pulse width sweeps from 1000 to 2000 microseconds. Once configured, the timer runs with no CPU involvement: the pulses continue while the core is halted at a breakpoint.",
    points: [
      "TIM2 CH2 with PSC = 15 for a 1 microsecond tick, so CCR2 is the pulse width in microseconds with no conversion",
      "Output verified on a PicoScope against the published RC servo specification rather than against the arithmetic that produced it",
      "Traced a systematic 1.0–1.5% error to the HSI running near 15.76 MHz instead of 16.00 MHz — it skews absolute pulse width but cancels out of duty cycle",
    ],
    table: {
      caption: "Measured at PA1, PicoScope 2204A",
      headers: ["CCR2", "Nominal", "Measured", "Duty expected", "Duty measured"],
      rows: [
        ["1000", "1.000 ms", "1.024 ms", "5.00 %", "5.04 %"],
        ["1500", "1.500 ms", "1.516 ms", "7.50 %", "7.48 %"],
        ["2000", "2.000 ms", "2.021 ms", "10.00 %", "9.97 %"],
        ["3000", "3.000 ms", "3.045 ms", "15.00 %", "15.01 %"],
      ],
    },
    images: [
      {
        file: "pwm-sweep-comparison.png",
        caption:
          "Four CCR2 values on the same time scale and trigger point: only the falling edge moves, the period does not change.",
      },
    ],
    tech: "C, CMSIS, ARM GNU toolchain, GNU Make, J-Link, PicoScope",
  },
  {
    name: "Spotify Now-Playing LED Matrix Display",
    meta: "Raspberry Pi Zero 2 W, Python — 2026",
    repo: "https://github.com/OhitsAndrewG/matrix_panel",
    description:
      "An always-on display rendering live Spotify playback — album art, scrolling title, elapsed timer, and progress bar — at 20 fps on a 64x32 RGB LED matrix, with a custom 3x5 bitmap font and double-buffered vsync rendering. Deployed headless as a systemd service.",
    points: [
      "Two-thread architecture separating Spotify Web API polling from the 20 fps render loop, with lock-guarded shared state",
      "Client-side playback position interpolation between 5 second polls, so the timer ticks smoothly with no extra API calls",
      "OAuth 2.0 refresh-token authentication with proactive token renewal",
      "Retry-After rate-limit backoff, and fallback to a clock display when idle or offline",
    ],
    images: [
      {
        file: "matrix-panel.jpg",
        caption:
          "The panel in use: album art on the left, track title and elapsed time in the 3x5 font, progress bar along the bottom.",
      },
    ],
    tech: "Python, Raspberry Pi Zero 2 W, rgbmatrix, Pillow, systemd",
  },
  {
    name: "Visualizing MFI Per Dilution",
    meta: "Data analysis, transplant immunology",
    description:
      "Mean fluorescence intensity (MFI) from multiplex flow cytometric single-bead assays is only semi-quantitative and does not accurately evaluate donor-specific antibody concentration, which has real clinical implications when assessing treatment for prospective transplant recipients. I plotted MFI per dilution across samples to expose that relationship.",
    points: [],
    images: [
      {
        file: "mfi_image.png",
        caption: "MFI plotted per dilution across samples.",
      },
    ],
    tech: "Python, data visualization",
  },
];

export const education = {
  school: "University of Southern California",
  degree: "B.S. Computer Science",
  detail:
    "Andrew and Erna Viterbi School of Engineering. Los Angeles, CA. Conferred May 2024.",
  image: "degree.png",
  verification: {
    code: "24A9-JMLR-A8SS",
    service: "USC Office of Academic Records and Registrar",
    url: "https://arr.usc.edu/diploma/#chapter=certified-electronic-credential-validation",
    note: "This is a CeDiploma. Its Certified Electronic Document Identifier (CeDiD) can be validated directly through the",
    after:
      "The identifier is not case sensitive. Validation is handled by the university, not by me.",
  },
};
