//https://media.gettyimages.com/vectors/abstract-geometric-pattern-artwork-retro-colors-and-white-background-vector-id1291627052?s=2048x2048

export default function BauhausFrame() {
  function generateFrameContents() {
    const contents = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const shape = Math.round(Math.random());
        const bgColor = Math.floor(Math.random() * 4);
        const shapeColor = Math.floor(Math.random() * 4) + 1;
        const rotation = (Math.floor(Math.random() * 4) + 1) * 90;
        contents.push(
          <div className={`c-${bgColor}`}>
            <div
              class={`ellipse-${shape} c-${shapeColor} rotate-${rotation}`}
            />
          </div>
        );
      }
    }
    return contents;
  }

  return (
    <div className="frame">
      {/* <div class="box">
        <div class="quarter-ellipse c-2 rotate-90"></div>
      </div>
      <div class="box c-1">
        <div class="quarter-ellipse c-2 rotate-270"></div>
      </div>
      <div class="box">
        <div class="quarter-ellipse c-3 rotate-270"></div>
      </div>
      <div class="box">
        <div class="quarter-ellipse c-4 rotate-270"></div>
      </div>
      <div class="box c-4">
        <div class="quarter-ellipse c-1"></div>
      </div>
      <div class="box c-3">
        <div class="quarter-ellipse c-2 rotate-270"></div>
      </div>
      <div class="box">
        <div class="quarter-ellipse c-2 rotate-90"></div>
      </div>
      <div class="box">
        <div class="quarter-ellipse c-3 rotate-270"></div>
      </div>
      <div class="box">
        <div class="quarter-ellipse c-1 rotate-180"></div>
      </div> */}
      {generateFrameContents()}
    </div>
  );
}
