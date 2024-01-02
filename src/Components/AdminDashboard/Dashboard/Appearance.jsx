import React from 'react';

const Appearance = () => {
    return (
        <div>
            <label className="swap swap-flip text-9xl">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                <div className="swap-on">😈</div>
                <div className="swap-off">😇</div>
            </label>
            <label className="swap text-6xl">
                <div className="swap-on">🥵</div>
                <div className="swap-off">🥶</div>
            </label>
            <label className="swap swap-active text-6xl">
                <div className="swap-on">🥳</div>
                <div className="swap-off">😭</div>
            </label>
            <div className="join join-vertical">
                <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Default" value="default" />
                <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Retro" value="retro" />
                <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Cyberpunk" value="cyberpunk" />
                <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Valentine" value="valentine" />
                <input type="radio" name="theme-buttons" className="btn theme-controller join-item" aria-label="Aqua" value="aqua" />
            </div>
        </div>
    );
};

export default Appearance;