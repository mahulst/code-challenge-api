import * as express from 'express';
import * as cors from 'cors';
import { arrivals } from './arrivals';
import { departures } from './departures';
import { gateChanges } from './gate-changes';

const app = express();

app.use(cors());

app.get('/arrivals', function(req, res) {
    res.json(arrivals);
});

app.get('/departures', function(req, res) {
    res.json(departures);
});

app.get('/gate-changes', function(req, res) {
    res.json(gateChanges);
});

app.get('/gate-changes/:search', function(req, res) {
    const search = req.params.search;

    const filteredGateChanges = gateChanges.filter(gc => {
        return gc.flightNumber.includes(search);
    });

    res.json(filteredGateChanges);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
