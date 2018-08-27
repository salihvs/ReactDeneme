class List extends React.Component {
    constructor() {
        super();

        this.eventSource = new EventSource('https://gip.epias.com.tr/gunici/SseServlet');

        const td = new Date();
        const month = td.getMonth() + 1;
        const newDate = td.getDate() + " / " + month + " / " + td.getFullYear() + " " + td.getHours() + ":" + td.getMinutes();

        this.state = {
            data: 'PH18082715',
            items: [
                {
                    "kontratAd": "PH18082715",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082716",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082717",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082718",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082719",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082720",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082721",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082722",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082723",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082800",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082801",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082802",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082803",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082804",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082805",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082806",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082807",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082808",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082809",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                },
                {
                    "kontratAd": "PH18082810",
                    "bestBuyPrice": null,
                    "bestSellPrice": null,
                    "bestBuyQuantity": null,
                    "bestSellQuantity": null,
                    "trendImageName": null,
                    "trendImageId": null,
                    "dateTime": null
                }
            ]
        };

        this.readData = this.readData.bind(this);
        this.getIndex = this.getIndex.bind(this);
        this.createRows = this.createRows.bind(this);
    }

    componentDidMount() {
        this.eventSource.addEventListener("SaatlikTabela", (e) => this.readData(e));
    }

    readData(e) {
        const td = new Date();
        const month = td.getMonth() + 1; //month fonksiyonu bir ay eksik veriyordu, bu yüzden +1 ekledim.
        const newDate = td.getDate() + " / " + month + " / " + td.getFullYear() + " " + td.getHours() + ":" + td.getMinutes();

        const newContract = JSON.parse(e.data);
        let updatedItems = this.state.items;
        let index = this.getIndex(updatedItems, newContract);

        updatedItems[index] = {
            "kontratAd": newContract.kontratAd,
            "bestBuyPrice": newContract.bestBuyPrice,
            "bestSellPrice": newContract.bestSellPrice,
            "bestBuyQuantity": newContract.bestBuyQuantity,
            "bestSellQuantity": newContract.bestSellQuantity,
            "trendImageName": newContract.trendImageName,
            "trendImageId": newContract.trendImageId,
            "ortalamaFiyat": newContract.ortalamaFiyat,
            "dateTime": newDate
        };

        this.setState({
            data: newContract.kontratAd,
            items: updatedItems
        });
    }

    getIndex(uI, nc) {
        for (var i = 0; i < uI.length; i++) {
            if (uI[i].kontratAd === nc.kontratAd) {
                return i;
            }
        }

        return -1;
    }

    createRows() {
        const table = this.state.items.map((elem, i) => {

            let trend = "flash" + elem.trendImageId;

            return (
                <tr key={elem.kontratAd} className={trend}>
                    <td>{elem.kontratAd}</td>
                    <td>{elem.bestBuyPrice}</td>
                    <td>{elem.bestSellPrice}</td>
                    <td>{elem.bestBuyQuantity}</td>
                    <td>{elem.bestSellQuantity}</td>
                    <td>{elem.dateTime}</td>
                    <td>{elem.trendImageName}</td>
                </tr>
            )
        });

        return (table);
    }

    render() {

        return (
            <div>
                <table className="table-striped">
                    <tbody>
                        <tr>
                            <th width="150">Contract Name</th>
                            <th width="150">Best Buy Price</th>
                            <th width="150">Best Sell Price</th>
                            <th width="150">Best Buy Quantity</th>
                            <th width="150">Best Sell Quantity</th>
                            <th width="150">Event Date</th>
                            <th></th>
                        </tr>

                        {this.createRows()}

                    </tbody>

                </table>
            </div>
        )
    }
}

ReactDOM.render(<List />, document.getElementById('root'));