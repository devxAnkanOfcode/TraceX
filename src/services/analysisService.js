export async function analyzeWallet({
    wallet,
    blockchain,
    transaction,
}) {
    // Temporary delay to simulate a real API request
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    // Temporary dynamic mock risk score
    const riskScore = Math.floor(
        40 + (wallet.length * 7) % 61
    );

    const riskLevel =
        riskScore >= 75
            ? "HIGH RISK"
            : riskScore >= 50
                ? "MEDIUM RISK"
                : "LOW RISK";

    // Temporary mock backend response
    return {
        wallet,
        blockchain,
        transaction: transaction || "Not provided",

        riskScore,
        riskLevel,
        status: "Suspicious activity detected",

        transactions: 47,
        volume: "12.8 ETH",
        hops: 4,

        entity: "Potential Crypto Exchange",

        indicators: [
            "Multiple high-value transfers detected",
            "Funds moved through multiple wallets",
            "Potential exchange interaction identified",
        ],
    };
}