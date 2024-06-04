import { Card } from "./ui/card";

const Footer = () => {
    return (
        <Card className="bg-primary px-8 py-5 text-[10px] opacity-75 lg:text-sm flex justify-center rounded-none">
            <span className="ml-2 text-white">&copy; 2024 by Glaydson Alves.</span>
        </Card>
    );
};

export default Footer;