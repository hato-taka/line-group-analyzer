export const nodes = [
    { data: { id: "kenji", label: "けんじ", color: "#92BFB1" } },
    { data: { id: "aiko", label: "あいこ", color: "#C24360" } },
    { data: { id: "takashi", label: "たかし", color: "#8C8C8C" } },
    { data: { id: "shinji", label: "しんじ", color: "#F4AC45" } },
    { data: { id: "yuuko", label: "ゆうこ", color: "#A27358" } },
  ];
  
  export const edges = [
    {
      data: {
        id: "aiko_to_kenji",
        source: "aiko",
        target: "kenji",
        emoji: "❤️",
        width: 4,
        style: "solid",
      },
    },
    {
      data: {
        id: "shinji_to_aiko",
        source: "shinji",
        target: "aiko",
        emoji: "⚡",
        width: 3,
        style: "dashed",
      },
    },
    {
      data: {
        id: "kenji_to_yuuko",
        source: "kenji",
        target: "yuuko",
        emoji: "",
        width: 2,
        style: "solid",
      },
    },
    {
      data: {
        id: "takashi_to_shinji",
        source: "takashi",
        target: "shinji",
        emoji: "",
        width: 5,
        style: "solid",
      },
    },
    {
      data: {
        id: "yuuko_to_kenji",
        source: "yuuko",
        target: "kenji",
        emoji: "",
        width: 1,
        style: "dotted",
      },
    },
  ];
  
  export const elements = [...nodes, ...edges];
  