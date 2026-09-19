const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const API_MODE =
    import.meta.env.VITE_API_MODE || "mock";

async function request(endpoint, options = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(
            `Server error: ${response.status} ${response.statusText}`
        );
    }

    return response.json();
}

export async function analyzeWalletAPI(payload) {

    // Temporary mode while backend is being developed
    if (API_MODE === "mock") {
        await new Promise((resolve) =>
            setTimeout(resolve, 1500)
        );

        return {
            success: true,

            data: {
                wallet: payload.wallet,
                blockchain: payload.blockchain,
                transaction: payload.transaction || "Not provided",

                riskScore: 78,
                riskLevel: "HIGH RISK",

                status: "Suspicious activity detected",

                transactions: 47,
                volume: "12.8 ETH",
                hops: 4,

                entity: "Potential Crypto Exchange",

                indicators: [
                    {
                        title: "Rapid fund movement",
                        severity: "high",
                        description:
                            "Funds moved through multiple wallets within a short period.",
                    },
                    {
                        title: "Multiple intermediary wallets",
                        severity: "high",
                        description:
                            "The transaction path contains several intermediary addresses.",
                    },
                    {
                        title: "Exchange interaction",
                        severity: "medium",
                        description:
                            "Potential interaction with a cryptocurrency exchange was detected.",
                    },
                ],

                transactionDetails: [
                    {
                        hash: "0xabc123...",
                        from: payload.wallet,
                        to: "0x3B...81C",
                        amount: 0.84,
                        timestamp: "2026-09-19T10:30:00Z",
                        status: "Suspicious",
                    },
                    {
                        hash: "0xdef456...",
                        from: "0x3B...81C",
                        to: "0xA4...72D",
                        amount: 0.81,
                        timestamp: "2026-09-19T10:42:00Z",
                        status: "Suspicious",
                    },
                ],

                fundFlow: {
                    nodes: [
                        {
                            id: "origin",
                            type: "ORIGIN",
                            label: "Investigated Wallet",
                            address: payload.wallet,
                            entity: "Reported Wallet",
                            status: "Reported",
                        },
                        {
                            id: "hop1",
                            type: "HOP",
                            label: "Wallet 1",
                            address: "0x3B...81C",
                            entity: "Unknown Wallet",
                            status: "Suspicious",
                        },
                        {
                            id: "hop2",
                            type: "HOP",
                            label: "Wallet 2",
                            address: "0xA4...72D",
                            entity: "Unknown Wallet",
                            status: "Suspicious",
                        },
                        {
                            id: "destination",
                            type: "DESTINATION",
                            label: "Potential Exchange",
                            address: "0xEX...789",
                            entity: "Crypto Exchange",
                            status: "High Risk",
                        },
                    ],

                    edges: [
                        {
                            from: "origin",
                            to: "hop1",
                            amount: 0.84,
                            asset: "ETH",
                            timestamp: "2026-09-19T10:30:00Z",
                        },
                        {
                            from: "hop1",
                            to: "hop2",
                            amount: 0.81,
                            asset: "ETH",
                            timestamp: "2026-09-19T10:42:00Z",
                        },
                        {
                            from: "hop2",
                            to: "destination",
                            amount: 0.79,
                            asset: "ETH",
                            timestamp: "2026-09-19T11:03:00Z",
                        },
                    ],
                },

                entities: [
                    {
                        name: "Potential Crypto Exchange",
                        type: "exchange",
                        confidence: 0.82,
                        address: "0xEX...789",
                    },
                ],

                riskBreakdown: [
                    {
                        factor: "Rapid fund movement",
                        points: 25,
                        description:
                            "Funds moved between addresses within a short time window.",
                    },
                    {
                        factor: "Multiple intermediary wallets",
                        points: 20,
                        description:
                            "Funds passed through multiple addresses before reaching the destination.",
                    },
                    {
                        factor: "Exchange interaction",
                        points: 15,
                        description:
                            "Interaction with a potentially identifiable exchange was detected.",
                    },
                    {
                        factor: "High-value transfer",
                        points: 18,
                        description:
                            "Observed transfer value exceeded the configured risk threshold.",
                    },
                ],
            },
        };
    }

    // Real backend mode
    return request("/api/analyze", {
        method: "POST",
        body: JSON.stringify(payload),
    });
}