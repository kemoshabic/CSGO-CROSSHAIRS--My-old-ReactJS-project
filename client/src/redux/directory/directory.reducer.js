export const INITIAL_STATE = {
  sections: [
    {
      team: "Astralis",
      imageUrl: "https://i.ibb.co/jDYgbZR/astralis.png",
      color: "#EF3742",
      players: ["dev1ce", "dupreeh", "gla1ve", "Magisk", "Xyp9x"],
      id: 1,
      teamsData: [
        { 
          id: 1,
          name: "dev1ce",
          img: "https://i.ibb.co/nnDrbC6/dev1ice.jpg",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Zowie EC2-B",
            keyboard: "Logitech G-PRO",
            headset: "Turtle Beach Elite Pro",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshair_outlinethickness 1;cl_crosshaircolor 2;cl_crosshairdot 0;cl_crosshairgap -1;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 2,
          name: "dupreeh",
          img: "https://i.ibb.co/YdXj7bH/Dupreeh-CS-GO.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Logitech G903",
            keyboard: "Logitech g513",
            headset: "Logitech G433",
            mousepad: "Zowie G-SR-SE",
          },
          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshair_outlinethickness 1;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -2;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 3,
          name: "gla1ve",
          img: "https://i.ibb.co/w72F4Mv/gla1ive.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Zowie EC1-A",
            keyboard: "Logitech G-PRO",
            headset: "Turtle Beach Elite Pro",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -2;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 4,
          name: "Magisk",
          img: "https://i.ibb.co/NCxnkx8/magisk.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Zowie EC2-A",
            keyboard: "Logitech G-PRO",
            headset: "Turtle Beach Elite Pro",
            mousepad: "Logitech G640",
          },

          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshaircolor 0;cl_crosshairdot 0;cl_crosshairgap -1;cl_crosshairsize 1;cl_crosshairstyle 4;cl_crosshairthickness 0",
        },
        {
          id: 5,
          name: "Xyp9x",
          img: "https://i.ibb.co/gyTYmbT/xyp9x.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Zowie FK2",
            keyboard: "Logitech G-PRO",
            headset: "Turtle Beach Elite Pro",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap 0;cl_crosshairsize 5;cl_crosshairstyle 4;cl_crosshairthickness 0.5",
        },
      ],
    },
    {
      team: "Fnatic",
      imageUrl: "https://i.ibb.co/nCnxsjr/fnatic.png",
      color: "#FF5900",
      players: ["Brollan", "Golden", "JW", "KRIMZ", "flusha"],
      id: 2,
      teamsData: [
        { 
          id: 6,
          name: "Brollan",
          img: "https://i.ibb.co/8PF6PZx/brollan.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Razer DeathAdder Elite",
            keyboard: "Corsair K70",
            headset: "Corsair Void",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -2;cl_crosshairsize 2;cl_crosshairstyle 4;cl_crosshairthickness 0",
        },
        {
          id: 8,
          name: "Golden",
          img: "https://i.ibb.co/8KWNrvn/golden.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie EC2-B",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud II",
            mousepad: "XTRFY GP2",
          },
          crosshair:
            "cl_crosshair_drawoutline 0; cl_crosshaircolor 1; cl_crosshairdot 0; cl_crosshairgap -2.5; cl_crosshairsize 4; cl_crosshairstyle 4; cl_crosshairthickness 0",
        },
        {
          id: 9,
          name: "JW",
          img: "https://i.ibb.co/YQ2h17D/jw.png",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2540",
            mouse: "Zowie EC2-A",
            keyboard: "Xtrfy K2",
            headset: "SteelSeries Arctis 5",
            mousepad: "Steelseries QCK Heavy",
          },

          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -1;cl_crosshairsize 4;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 10,
          name: "KRIMZ",
          img: "https://i.ibb.co/tqk743G/krimz.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2540",
            mouse: "Zowie EC1-B",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud Alpha",
            mousepad: "	Fnatic Gear Focus Pro",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -3;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 7,
          name: "flusha",
          img: "https://i.ibb.co/9vxWc7q/flusha.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Logitech G903",
            keyboard: "Logitech G810",
            headset: "Logitech G433",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 5;cl_crosshairdot 0;cl_crosshairgap -3;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
      ],
      
    },
    {
      team: "G2",
      imageUrl: "https://i.ibb.co/9NGMRg4/g2.png",
      color: "#000000",
      players: ["AmaNek", "huNter", "JaCkz", "kennyS", "nexa"],
      id: 3,
      teamsData: [
    
        {
          id: 11,
          name: "AmaNek",
          img: "https://i.ibb.co/4mxmCH7/amanek.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Logitech G PRO Wireless",
            keyboard: "Logitech g513",
            headset: "Logitech G-PRO X",
            mousepad: "Logitech G640",
          },
          crosshair:
            "cl_crosshairalpha 200; cl_crosshaircolor 4; cl_crosshaircolor_b 1; cl_crosshaircolor_r 0; cl_crosshaircolor_g 0; cl_crosshairgap -3; cl_crosshairsize 3; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 1; cl_crosshair_drawoutline 1;",
        },
        {
          id: 12,
          name: "huNter",
          img: "https://i.ibb.co/NtLLSk0/hunter.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Asus VG248QE",
            mouse: "Zowie EC2-B",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud II",
            mousepad: "Steelseries QCK Heavy",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -1;cl_crosshairgap_useweaponvalue 0;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 13,
          name: "JaCkz",
          img: "https://i.ibb.co/42LfgHx/jackz.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie EC1-B",
            keyboard: "Zowie Celeritas 2",
            headset: "Sennheiser Game Zero",
            mousepad: "Zowie G-SR",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -0.5;cl_crosshairsize 4;cl_crosshairstyle 5;cl_crosshairthickness 0",
        },
        {
          id: 14,
          name: "kennyS",
          img: "https://i.ibb.co/QfzWvgv/kennyS.jpg",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Razer DeathAdder Elite",
            keyboard: "Logitech G810",
            headset: "Logitech G430",
            mousepad: "	Logitech G640",
          },

          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshair_outlinethickness 1;cl_crosshaircolor 4;cl_crosshairdot 0;cl_crosshairgap -1;cl_crosshairsize 3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 15,
          name: "nexa",
          img: "https://i.ibb.co/DLk0wST/nexa.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie FK1",
            keyboard: "Xtrfy K2",
            headset: "HyperX Cloud II",
            mousepad: "Xtrfy XTP1",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap 0;cl_crosshairgap_useweaponvalue 0;cl_crosshairsize 1;cl_crosshairstyle 5;cl_crosshairthickness 1;",
        },
      ],
    },

    {
      team: "Na'Vi",
      imageUrl: "https://i.ibb.co/kJZktVq/na-vi.png",
      color: "#FFF200",
      teamColor: "#000000",
      players: ["Boombl4", "electronic", "flamie", "Perfecto", "s1mple"],
      id: 4,
      teamsData: [
    
        {
          id: 16,
          name: "Boombl4",
          img: "https://i.ibb.co/Ltjbszf/boombl4.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Zowie EC1-A White Edition",
            keyboard: "HyperX Alloy Elite",
            headset: "HyperX Cloud II",
            mousepad: "Zowie G-SR-SE Divina Blue Edition",
          },
          crosshair:
            "cl_crosshairgap -3; cl_crosshairsize 3; cl_crosshairalpha 255; cl_crosshaircolor 2; cl_crosshairdot 0; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 0; cl_crosshair_sniper_width 1; cl_crosshair_drawoutline 0;",
        },
        {
          id: 17,
          name: "electronic",
          img: "https://i.ibb.co/s2N4Jcd/electronic.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Logitech G403 Wireless",
            keyboard: "Razer BlackWidow X Chroma",
            headset: "HyperX Cloud II",
            mousepad: "SteelSeries QCK+",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -3;cl_crosshairsize 4;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 18,
          name: "flamie",
          img: "https://i.ibb.co/X56ydwp/flamie.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie EC1-B",
            keyboard: "Zowie Celeritas 2",
            headset: "Sennheiser Game Zero",
            mousepad: "Zowie G-SR",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -0.5;cl_crosshairsize 4;cl_crosshairstyle 5;cl_crosshairthickness 0",
        },
        {
          id: 19,
          name: "Perfecto",
          img: "https://i.ibb.co/nmH6yhJ/perfecto.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2546",
            mouse: "ZOWIE S2",
            keyboard: "LOGITECH G PRO X MECHANICAL KEYBOARD",
            headset: "LOGITECH G PRO X",
            mousepad: "LOGITECH G640",
          },

          crosshair:"cl_crosshairalpha 500; cl_crosshairsize 2; cl_crosshairthickness 0; cl_crosshairgap -1.5; cl_crosshair_drawoutline 0; cl_crosshairdot 0; cl_crosshaircolor 4; cl_crosshaircolor_b 44; cl_crosshaircolor_g 95; cl_crosshaircolor_r 27; cl_crosshairstyle 4;",
        },
        {
          id: 20,
          name: "s1mple",
          img: "https://i.ibb.co/ZgJ836L/s1mplee.jpg",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie FK1",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud II",
            mousepad: "HyperX Fury Pro",
          },
          crosshair:
            "cl_crosshair_drawoutline 1;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap 0;cl_crosshairsize 2;cl_crosshairstyle 4;cl_crosshairthickness 0",
        },
      ],
    },
    {
      team: "Liquid",
      imageUrl: "https://i.ibb.co/qJ3XMhP/liquid.png",
      color: "#0A2B47",
      players: ["EliGe", "NAF", "nitr0", "Stewie2k", "Twistzz"],
      id: 5,
      teamsData: [
    
        {
          id: 21,
          name: "EliGe",
          img: "https://i.ibb.co/b3mccVT/elige.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2540",
            mouse: "Logitech G703",
            keyboard: "Ducky One",
            headset: "HyperX Cloud II",
            mousepad: "Steelseries QCK Heavy",
          },
          crosshair:"cl_crosshaircolor 1;cl_crosshairstyle 1; cl_fixedcrosshairgap -4.5; hud_showtargetid 0",
        },
        {
          id: 22,
          name: "NAF",
          img: "https://i.ibb.co/gg23Nqn/naf.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2411z",
            mouse: "Zowie EC1-A",
            keyboard: "Sennheiser Game Zero",
            headset: "HyperX Alloy FPS",
            mousepad: "	Zowie G-SR",
          },
          crosshair:
          "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap 2;cl_crosshairsize 2;cl_crosshairstyle 4;cl_crosshairthickness 1;",
        },
        {
          id: 23,
          name: "nitr0",
          img: "https://i.ibb.co/y47FxNY/nitr0.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Asus VG248QE",
            mouse: "Zowie EC2-B",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud II",
            mousepad: "Razer Gigantus",
          },
          crosshair:
            "cl_crosshairstyle 5;cl_crosshairsize 3.5;cl_crosshair_drawoutline 1;cl_crosshairthickness 1;cl_crosshair_outlinethickness 0.4;cl_crosshairdot 0;cl_crosshairgap -1",
        },
        {
          id: 24,
          name: "Stewie2k",
          img: "https://i.ibb.co/tq8kDdw/stewie.jpg",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "SteelSeries Rival 310",
            keyboard: "Razer BlackWidow X Chroma",
            headset: "HyperX Cloud II",
            mousepad: "	Steelseries QCK Heavy",
          },

          crosshair:"cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -1.5;cl_crosshairsize 4.5;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 25,
          name: "Twistzz",
          img: "https://i.ibb.co/1Qv3T2k/twistz.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Asus VG248QE	",
            mouse: "Razer DeathAdder Elite",
            keyboard: "Razer BlackWidow X Chroma",
            headset: "HyperX Cloud II",
            mousepad: "Zowie G-SR",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -5;cl_crosshairsize 4;cl_crosshairstyle 4;cl_crosshairthickness 0",
        },
      ]    
    },
    {
      team: "FaZe",
      imageUrl: "https://i.ibb.co/R7F7dJx/faze.png",
      color: "#E43D30",
      players: ["Bymas", "broky", "NiKo", "rain", "coldzera"],
      id: 6,
      teamsData: [
        {
          id: 26,
          name: "Bymas",
          img: "https://i.ibb.co/N2y6Zhk/bymas.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Logitech G403 Hero",
            keyboard: "HyperX Alloy Elite",
            headset: "HyperX Cloud Aplha S",
            mousepad: "HyperX Fury S",
          },
          crosshair:"cl_crosshair_drawoutline 1; cl_crosshair_outlinethickness 1; cl_crosshairalpha 255; cl_crosshaircolor 5; cl_crosshaircolor_b 0; cl_crosshaircolor_g 255; cl_crosshaircolor_r 0; cl_crosshairdot 0; cl_crosshairgap -2; cl_crosshairscale 4; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairthickness 1",
        },
        {
          id: 27,
          name: "broky",
          img: "https://i.ibb.co/Z24SpXX/broky.jpg",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie EC2",
            keyboard: "Steelseries apex pro TKL",
            headset: "Steelseries Arctis Pro",
            mousepad: "Zowie G-SR-SE Divina Blue Edition",
          },
          crosshair:
            "cl_crosshairalpha 255; cl_crosshaircolor 4; cl_crosshairdot 1; cl_crosshairgap -2; cl_crosshairsize 1; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 0; cl_crosshair_drawoutline 0; cl_crosshair_sniper_width 1; cl_crosshaircolor_b 0; cl_crosshaircolor_g 0; cl_crosshaircolor_r 255;",
        },
        {
          id: 28,
          name: "NiKo",
          img: "https://i.ibb.co/NjbFb8k/niko.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie EC2-B",
            keyboard: "SteelSeries Apex M750",
            headset: "HyperX Cloud II",
            mousepad: "Steelseries QCK Heavy",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 4;cl_crosshairdot 0;cl_crosshairgap -1;cl_crosshairsize 1;cl_crosshairstyle 4;cl_crosshairthickness 0.5",
        },
        {
          id: 29,
          name: "rain",
          img: "https://i.ibb.co/DQdY3dZ/rain.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Qpad 5K",
            keyboard: "Xtrfy K2",
            headset: "SteelSeries Arctis Pro",
            mousepad: "Zowie G-SR",
          },

          crosshair:"cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -2;cl_crosshairgap_useweaponvalue 0;cl_crosshairsize 2;cl_crosshairstyle 4;cl_crosshairthickness 0",
        },
        {
          id: 30,
          name: "coldzera",
          img: "https://i.ibb.co/179ds7w/coldzera.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie FK1",
            keyboard: "Razer BlackWidow X Chroma",
            headset: "Sennheiser Gsp 600",
            mousepad: "Razer Gigantus",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshaircolor 1;cl_crosshairdot 1;cl_crosshairgap 1;cl_crosshairsize 2.3;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
      ]    
    },
    {
      team: "mousesports",
      imageUrl: "https://i.ibb.co/vZWT3Cn/mousesports.png",
      color: "#B11739",
      players: ["ChrisJ", "Karrigan", "ropz", "frozen", "woxic"],
      id: 7,
      teamsData: [
        {
          id: 31,
          name: "ChrisJ",
          img: "https://i.ibb.co/r4hFjPj/crhisJ.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "Benq XL2546",
            mouse: "Dream Machines DM2 Comfy",
            keyboard: "ChrisJ",
            headset: "Razer Kraken Pro V2",
            mousepad: "Razer Gigantus Team Razer Edition-",
          },
          crosshair:"cl_crosshair_drawoutline 1; cl_crosshair_outlinethickness 1; cl_crosshairalpha 255; cl_crosshaircolor 4; cl_crosshaircolor_b 0; cl_crosshaircolor_g 0; cl_crosshaircolor_r 0; cl_crosshairdot 0; cl_crosshairgap 1; cl_crosshairscale 2000; cl_crosshairsize 3; cl_crosshairstyle 4; cl_crosshairthickness 1; cl_crosshairusealpha 1;",
        },
        {
          id: 32,
          name: "Karrigan",
          img: "https://i.ibb.co/71mCyj8/karrigan.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Razer DeathAdder Elite",
            keyboard: "Razer BlackWidow Chroma TE V2	",
            headset: "Razer Kraken Pro V2",
            mousepad: "Razer Gigantus Team Razer Edition",
          },
          crosshair:
          "cl_crosshairalpha 255; cl_crosshaircolor 1; cl_crosshairdot 0; cl_crosshairgap -2; cl_crosshairsize 3; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 1; cl_crosshair_drawoutline 0;",
        },
        {
          id: 33,
          name: "ropz",
          img: "https://i.ibb.co/TTR2x8t/ropz.png",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Zowie EC2-A",
            keyboard: "Zowie Celeritas 2",
            headset: "Sennheiser Game Zero",
            mousepad: "Zowie G-SR",
          },
          crosshair:
            "cl_crosshair_drawoutline 0;cl_crosshair_outlinethickness 1;cl_crosshaircolor 1;cl_crosshairdot 0;cl_crosshairgap -3;cl_crosshairsize 2;cl_crosshairstyle 4;cl_crosshairthickness 1",
        },
        {
          id: 34,
          name: "frozen",
          img: "https://i.ibb.co/RCHsmwy/frozen.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2546",
            mouse: "Zowie EC2-A",
            keyboard: "HyperX Alloy FPS	",
            headset: "Razer Kraken Pro V2",
            mousepad: "Logitech G640 ESL Edition",
          },

          crosshair:"cl_crosshairalpha 255; cl_crosshaircolor 1; cl_crosshairdot 0; cl_crosshairgap -2; cl_crosshairsize 4; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 0; cl_crosshair_drawoutline 0;",
        },
        {
          id: 35,
          name: "woxic",
          img: "https://i.ibb.co/r5vypCj/woxic1.jpg",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2546",
            mouse: "Steelseries Sensei Ten",
            keyboard: "Razer Blackwindow Crhoma TE V2",
            headset: "Razer Kraken TE",
            mousepad: "Razer Gigantus",
          },
          crosshair:
            "cl_crosshairalpha 200; cl_crosshaircolor 5; cl_crosshaircolor_b 129; cl_crosshaircolor_r 250; cl_crosshaircolor_g 50; cl_crosshairdot 0; cl_crosshairgap -1; cl_crosshairsize 3; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 1; cl_crosshair_sniper_width 1; cl_crosshair_drawoutline 0;",
        },
      ]
    },
    {
      team: "Furia",
      imageUrl: "https://i.ibb.co/Lh9LDnm/furia.png",
      color: "#000000",
      players: ["HEN1", "arT", "yuurih", "VINI", "KSCERATO"],
      id: 8,
      teamsData: [
        {
          id: 36,
          name: "HEN1",
          img: "https://i.ibb.co/CWBCyGM/hen1.jpg",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ Xl2546",
            mouse: "Zowie Ec2 Tyloo",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud Alpha",
            mousepad: "Steelseries QCK Heavy",
          },
          crosshair:"cl_crosshairalpha 255; cl_crosshaircolor 4; cl_crosshairdot 0; cl_crosshairgap -3; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 0; cl_crosshair_drawoutline 0; cl_crosshair_sniper_width 1.1;",
        },
        {
          id: 37,
          name: "arT",
          img: "https://i.ibb.co/vX77Mgw/arT.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2540",
            mouse: "Logitech G Pro",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud Revolver",
            mousepad: "HyperX Fury S",
          },
          crosshair:
          "cl_crosshairalpha 255; cl_crosshaircolor 1; cl_crosshairdot 0; cl_crosshairgap -3; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 0; cl_crosshair_drawoutline 0;          ",
        },
        {
          id: 38,
          name: "yuurih",
          img: "https://i.ibb.co/zRjFDf1/yuurih.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2546",
            mouse: "Zowie EC1",
            keyboard: "HyperX Alloy",
            headset: "HyperX Cloud II",
            mousepad: "Zowie G-SR",
          },
          crosshair:
            "cl_crosshairalpha 200; cl_crosshaircolor 2; cl_crosshairdot 0; cl_crosshairgap -3; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 1; cl_crosshair_drawoutline 0;",
        },
        {
          id: 39,
          name: "VINI",
          img: "https://i.ibb.co/BCj84Bh/vini.jpg",
          role: "awp",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2546",
            mouse: "Razer Viper",
            keyboard: "HyperX Alloy Elite",
            headset: "HyperX Cloud Alpha S",
            mousepad: "Gigabyte Aorus AMP500",
          },

          crosshair:"cl_crosshairalpha 200; cl_crosshaircolor 4; cl_crosshairdot 0; cl_crosshairgap -2; cl_crosshairsize 3; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 1; cl_crosshair_drawoutline 1;",
        },
        {
          id: 40,
          name: "KSCERATO",
          img: "https://i.ibb.co/D8NF6yS/kscerato.jpg",
          role: "rifler",
          crosshairImg: "https://i.ibb.co/tKc5tLH/dev1ce.jpg",
          settings: {
            monitor: "BenQ XL2546",
            mouse: "Glorious Model D",
            keyboard: "HyperX Alloy FPS",
            headset: "HyperX Cloud Alpha",
            mousepad: "HyperX Fury S",
          },
          crosshair:
            "cl_crosshair_drawoutline 0; cl_crosshair_sniper_width 1; cl_crosshairalpha 250; cl_crosshaircolor 4; cl_crosshaircolor_b 165; cl_crosshaircolor_g 255; cl_crosshaircolor_r 0; cl_crosshairdot 1; cl_crosshairgap -3; cl_crosshairgap_useweaponvalue 0; cl_crosshairsize 1; cl_crosshairstyle 4; cl_crosshairthickness 0; cl_crosshairusealpha 1;",
        },
      ]
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
