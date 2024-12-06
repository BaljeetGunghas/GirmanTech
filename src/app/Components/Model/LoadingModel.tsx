import React, { ReactNode } from "react";
import classes from "./Modellayout.module.scss";
import { IFUserData } from "@/app/SearchResult/page";

interface ComponentProps {
    isOpen: boolean;
    onClose: (val: boolean) => void;
}

const LoadingModel: React.FC<ComponentProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    setTimeout(() => {
        onClose(false)
    }, 50000);

    return (
        <div className={classes.overlay}>
            <div className={classes.loadingmodel} onClick={(e) => e.stopPropagation()}>
                <div className={classes.loader}></div>
            </div>
        </div>
    );
};

export default LoadingModel;
