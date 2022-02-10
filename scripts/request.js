const getWords = async (wordCount) =>{
    const res = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(res.status = 200){
        const data = await res.json();
        return data.puzzle
    }
    else{
        throw new Error(`Can't fetch puzzle!`);
    }
}