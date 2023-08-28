import React from 'react';
import '../styles/toolbar.scss'
import Brush from '../tools/Brush';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import Square from '../tools/Square';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';

const Toolbar = () => {
    const changeColor = (e) => {
        toolState.setStrokeColor(e.target.value);
        toolState.setFillColor(e.target.value);
    } 

    const download = () => {
        const dataUrl = canvasState.canvas.toDataURL();
        console.log(dataUrl);
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = canvasState.sessionid + '.jpg'
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    }

    return(
        <div className="toolbar">
            <div className="">
                <button className='toolbar-btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
                <button className='toolbar-btn square' onClick={() => toolState.setTool(new Square(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
                <button className='toolbar-btn circle' onClick={() => toolState.setTool(new Circle(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
                <button className='toolbar-btn eraser' onClick={() => toolState.setTool(new Eraser(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
                <button className='toolbar-btn line' onClick={() => toolState.setTool(new Line(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
                <input type="color" className='toolbar-btn color'onChange={e => changeColor(e)}/>
            </div>

            <div className="settings-bar">
                <label htmlFor="line-width">Width</label>
                <input 
                    type="number" 
                    min={1} 
                    max={50} 
                    defaultValue={1} 
                    id="line-width"
                    onChange={e => toolState.setLineWidth(e.target.value)}
                />

<label htmlFor="stroke-color">Stroke color</label>
                <input 
                    type="color"    
                    id="stroke-color"
                    onChange={e => toolState.setStrokeColor(e.target.value)}
                />
            </div>
      
            <div className="">
                <button className='toolbar-btn undo' onClick={() => canvasState.undo(canvasState.socket, canvasState.sessionid)}/>
                <button className='toolbar-btn redo' onClick={() => canvasState.redo(canvasState.socket, canvasState.sessionid)}/>
                <button className='toolbar-btn save' onClick={() => download()}/>
            </div>
           
        </div>
    )
}

export default Toolbar;