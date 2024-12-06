import React, { ReactNode } from "react";
import classes from "./Modellayout.module.scss";
import { IFUserData } from "@/app/SearchResult/page";

interface ComponentProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: (val: boolean) => void;
}

const ModelLayout: React.FC<ComponentProps> = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className={classes.overlay} onClick={e => onClose(false)}>
            <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
                <button className={classes.closeButton} onClick={e => onClose(false)}>
                    &times;
                </button>
                <div className={classes.content}>
                    <div>{children}</div>

                    <button className={classes.button} onClick={e => onClose(false)}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default ModelLayout;
