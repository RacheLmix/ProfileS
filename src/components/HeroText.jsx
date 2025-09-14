import React from 'react';
import SplitText from './SplitText'; // default import

const HeroText = () => {
    return (
        <div className="absolute w-[520px] h-[520px] mt-[-20px] left-16 flex flex-col justify-center text-left space-y-4">
            <SplitText
                text="TÙNG DƯƠNG"
                delay={50}
                duration={0.6}
                tag="h1"
                className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                splitType="chars"
            />
            <SplitText
                text={`Frontend Developer & Python Enthusiast.
Passionate about building interactive web experiences.
Loves learning new technologies and exploring creative coding.
Always eager to collaborate on innovative projects.`}
                delay={50}
                duration={0.6}
                tag="h6"
                className="text-left text-lg md:text-xl font-semibold text-white drop-shadow-lg"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                splitType="words"
            />
        </div>
    );
};

export default HeroText;
