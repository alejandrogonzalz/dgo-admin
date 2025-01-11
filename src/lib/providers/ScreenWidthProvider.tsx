import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext,
} from "react";

type ScreenWidthContextType = {
    screenWidth: number;
};

export const ScreenWidthContext = createContext<ScreenWidthContextType | undefined>(undefined);

export const ScreenWidthProvider = ({ children }: { children: ReactNode }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleResize = () => {
            clearTimeout(timeoutId);
            setScreenWidth(window.innerWidth);
            timeoutId = setTimeout(() => {
            }, 50);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    const contextValue: ScreenWidthContextType = { screenWidth };

    return (
        <ScreenWidthContext.Provider value={contextValue}>
            {children}
        </ScreenWidthContext.Provider>
    );
};

export const useScreenWidth = (): number => {
    const context = useContext(ScreenWidthContext);

    if (context === undefined) {
        throw new Error("useScreenWidth must be used within a ScreenWidthProvider");
    }

    return context.screenWidth;
};
