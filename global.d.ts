// This file will add both p5 instanced and global intellisence.
// It makes sure that all the global p5 functions are available to typescript

import p5 = require('p5');
import * as p5Global from 'p5/global'

export = p5;
export as namespace p5;
declare global {
    interface Window {
        p5: typeof p5,
    }

    /**
     *   Loads a sound file from a path and creates a
     *   p5.SoundFile from it. The sound may not be immediately
     *   available for rendering If you want to ensure that
     *   the sound is ready before doing anything with it,
     *   place the loadSound() call in preload(). You may
     *   also supply a callback function to handle the
     *   sound when it's ready.
     *
     *
     *   The path to the sound should be relative to the
     *   HTML file that links in your sketch. Loading an
     *   sound from a URL or other remote location may be
     *   blocked due to your browser's built-in security.
     *   @param path Path of the sound to be loaded
     *   @param successCallback Called
     *   once the sound is loaded. Will be passed the
     *   p5.SoundFile.
     *   @param failureCallback Called with event error
     *   if the sound fails to load.
     *   @param whileLoading Callback function that will
     *   receive percentage loaded so far, from 0.0 to 1.0.
     *   @return The p5.SoundFile object
     */
    function loadSound(
        path: string | Array<string> | p5.File,
        successCallback?: (sound: p5.SoundFile) => void,
        failureCallback?: (erorr: Error) => void,
        whileLoading?: (percentageLoaded: number) => void
    ): p5.SoundFile;
    
    function createSprite(
        x: number,
        y: number,
        width: number,
        height: number
    
    ): any

    function drawSprites(): any
}


