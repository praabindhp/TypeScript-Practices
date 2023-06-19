// Intersection Types

type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => console.log('🐲 Dragging'),
    resize: () => console.log('🎿 Resizing'),
};

textBox.drag();
textBox.resize();

/*
Output :
🐲 Dragging
🎿 Resizing
*/