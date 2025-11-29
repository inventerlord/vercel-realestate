import { CarouselNext, CarouselPrevious } from "../ui/carousel";

const Carousel = () => {
    return (<>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <CarouselPrevious className="relative left-0 transform -translate-x-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
            <CarouselNext className="relative right-0 transform translate-x-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
        </div>
    </>);
}

export default Carousel;

export const CarouselItem = () => {
    return (<></>);
}
