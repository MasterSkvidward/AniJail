import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import classes from "./DropZone.module.scss";

export default function DropZone() {
   const onDrop = useCallback((acceptedFiles: any) => {
      // Do something with the files
      acceptedFiles.forEach((file: any) => {
         alert(JSON.stringify(file));
      });
   }, []);

   const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
      onDrop,
      noClick: true,
      multiple: false,
      accept: { "image/*": [".png", ".svg", ".jpeg", ".jpg"] },
   });

   return (
      <div {...getRootProps()} className={isDragActive ? [classes.dropzone, classes.active].join(" ") : classes.dropzone}>
         <input {...getInputProps()} />
         <div className={classes.dropzone__box}>
            <p>Drop image here</p>
            <p>or</p>
            <button className={classes.dropzone__btn} onClick={open}>
               Choose image
            </button>
         </div>
      </div>
   );
}
