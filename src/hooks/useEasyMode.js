import { useContext } from "react"
import { EasyModeContext } from "../context/EasyModeContext"

export const useEasyMode = () => {
    return useContext(EasyModeContext);
}