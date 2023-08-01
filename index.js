const url = "https://www.dragonball-multiverse.com/";

export const handler = async() => {
    try {
        const res = await fetch(url);
        console.info(url, 'works');
    }
    catch (e) {
        console.error(url, 'does not work');
    }
};

handler();