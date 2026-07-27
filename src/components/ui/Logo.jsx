import Button from "./Button";

function Logo({onClick}) {
    return(
        <button 
            type="button"
            onClick={onClick}
            className="text-2xl font-bold tracking-tight text-white"
            aria-label="Go to top of page"
            >
                <span className="text-blue-500">&lt;</span>
                SK
                <span className="text-blue-500"> /&gt;</span>
        </button>
    );
}

export default Logo;