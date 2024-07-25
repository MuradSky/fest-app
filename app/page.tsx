import Symbols from "@/components/blocks/symbols";
import Participation from "@/components/blocks/participation";
import Leaders from "@/components/blocks/leaders";
import Program from "@/components/blocks/program";
import Gain from "@/components/blocks/gain";
import Hero from "@/components/blocks/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <Gain />
            <Program />
            <Leaders />
            <Participation />
            <Symbols />
        </>
    );
}
