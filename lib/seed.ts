import prismadb from "./prismadb";

export const seed = async () => {
  const video = await prismadb.video.createMany({
    data: [
      {
        duration: "17 min",
        title:
          "Episode 1: TOP 4 INSANE ALIEN ENCOUNTERS | The Proof Is Out There",
        videoUrl:
          "https://uqeiqzeedyrqjsxnwlia.supabase.co/storage/v1/object/public/Episodes/y2mate.is%20-%20TOP%204%20INSANE%20ALIEN%20ENCOUNTERS%20The%20Proof%20Is%20Out%20There-gEl4A0G3poQ-480pp-1697749594.mp4?t=2023-10-19T21%3A32%3A52.436Z",
        seriesId: "65319be1c4981f04f91a57ff",
      },
      {
        title: "Episode 2: Ancient Life as Old as the Universe",
        videoUrl:
          "https://uqeiqzeedyrqjsxnwlia.supabase.co/storage/v1/object/public/Episodes/y2mate.is%20-%20Ancient%20Life%20as%20Old%20as%20the%20Universe-JOiGEI9pQBs-480pp-1697751140.mp4?t=2023-10-19T21%3A34%3A28.206Z",
        duration: "12 min",
        seriesId: "65319be1c4981f04f91a57ff",
      },
      {
        title: "Episode 1: Amazing VFX Fantasy Short Film | Evenveil",
        videoUrl:
          "https://uqeiqzeedyrqjsxnwlia.supabase.co/storage/v1/object/public/Episodes/y2mate.is%20-%20Amazing%20VFX%20Fantasy%20Short%20Film%20_%20Evenveil-zSTP_uJa8-E-720p-1697750164.mp4?t=2023-10-19T21%3A34%3A41.730Z",
        duration: "10 min",
        seriesId: "65319b72c4981f04f91a57fd",
      },
      {
        title: 'Episode 2: Sci-Fi Fantasy Short Film: "Cyan Eyed" | DUST ',
        videoUrl:
          "https://uqeiqzeedyrqjsxnwlia.supabase.co/storage/v1/object/public/Episodes/y2mate.is%20-%20Sci%20Fi%20Fantasy%20Short%20Film%20Cyan%20Eyed%20DUST-pZm94gQBzOQ-480pp-1697751414.mp4?t=2023-10-19T21%3A40%3A18.914Z",
        duration: "8 min",
        seriesId: "65319b72c4981f04f91a57fd",
      },
      {
        title: "Episode 3: Sci-Fi Fantasy Short Film: Downside Up | DUST",
        videoUrl:
          "https://uqeiqzeedyrqjsxnwlia.supabase.co/storage/v1/object/public/Episodes/y2mate.is%20-%20Sci%20Fi%20Fantasy%20Short%20Film%20Downside%20Up%20DUST-XFisjATJM2M-480pp-1697751484.mp4?t=2023-10-19T21%3A41%3A19.844Z",
        duration: "13 min",
        seriesId: "65319b72c4981f04f91a57fd",
      },
    ],
  });
};