import { canDrag } from "./DraggableComponent";

describe("DraggableComponent", () => {
  it("it tests draggable canDrag helper function", () => {
    expect(canDrag(false, false, { dragDisabled: false }, false)).toBe(true);
    expect(canDrag(true, false, { dragDisabled: false }, false)).toBe(false);
    expect(canDrag(false, true, { dragDisabled: false }, false)).toBe(false);
    expect(canDrag(false, false, { dragDisabled: true }, false)).toBe(false);
  });
});
