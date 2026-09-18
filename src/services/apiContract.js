export const ANALYZE_WALLET_ENDPOINT = "/api/analyze";

export const analyzeWalletRequest = {
    wallet: "string",
    blockchain: "string",
    transaction: "string",
};

export const analyzeWalletResponse = {
    wallet: "string",
    blockchain: "string",
    transaction: "string",

    riskScore: "number",
    riskLevel: "string",
    status: "string",

    transactions: "number",
    volume: "string",
    hops: "number",

    entity: "string",

    indicators: ["string"],
};