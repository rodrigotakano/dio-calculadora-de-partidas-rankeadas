const prompt = require ("prompt-sync")({sigint: true})

main()

function main()
{
    let wins, loses, saldo, rank;
    wins = getWins();
    loses = getLoses();
    saldo = wins - loses;
    rank = getRank(saldo);
    console.log(`O Herói tem saldo de ${saldo} vitórias e está no nível de ${rank}`);
}

function getWins()
{
    let wins;
    wins = prompt("Digite o número de vitórias: ")
    return wins;
}

function getLoses()
{
    let loses;
    loses = prompt("Digite o número de derrotas: ")
    return loses;
}

function getRank(saldo)
{
    if (saldo < 10)
    {
        return "Ferro";
    }
    else if(saldo > 11 && saldo <= 20)
    {
        return "Bronze";
    }
    else if(saldo > 20 && saldo <= 50)
    {
        return "Prata";
    }
    else if(saldo > 50 && saldo <= 80)
    {
        return "Ouro";
    }
    else if(saldo > 80 && saldo <= 90)
    {
        return "Diamante";
    }
    else if(saldo > 90 && saldo <= 100)
    {
        return "Lendário";
    }
    else if(saldo >= 101)
    {
        return "Imortal";
    }
}