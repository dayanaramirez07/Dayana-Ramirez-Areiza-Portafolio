import { TextPrincipal } from "@/components/atoms/Text";
import React from "react";

const Contact = () => {
    return (
        <div className="mx-5">
            <div className="flex w-full justify-between">
                <div className="flex items-start">
                    <TextPrincipal text="Correo:" />
                </div>
                <div className="flex items-end">
                    <TextPrincipal text="dayanaramirezareiza@gmail.com" />
                </div>
            </div>
            <div className="flex w-full justify-between">
                <div className="flex items-start">
                    <TextPrincipal text="Ciudad:" />
                </div>
                <div className="flex items-end">
                    <TextPrincipal text="Medellín, Colombia" />
                </div>
            </div>
            <div className="flex w-full justify-between">
                <div className="flex items-start">
                    <TextPrincipal text="Edad:" />
                </div>
                <div className="flex items-end">
                    <TextPrincipal text="23 años" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
