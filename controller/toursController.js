const fs = require('fs');
var tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'));

exports.getAllTours = (req, res) => {
    res.status(200).json({
        message: 'success',
        dataLength: tours.length,
        data: {
            tours: tours
        }
    });
}

exports.createTour = (req, res) => {
    data = req.body;
    console.log(data);
    tours.push(data);
    
    fs.writeFile('./dev-data/data/reviews.json', JSON.stringify(tours),  (err) => {
        res.status(201).json({
            message: 'success',
            dataLength: tours.length,
            data: {
                tours: tours
            }
        });
    });
}

exports.getTour = (req, res) => {

    let id =  req.params.id*1;

    if (id >= tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Not Found'
        });
    }
    let tourData = tours.find(ele => ele.id === id);    

    res.status(200).json({
        status: 'success',
        data: {
            tours: tourData
        }
    });
}
exports.updateTour = (req, res) => {
    if ( +req.params.id > tours.length) {
        return res.status(400).json({
            status: 'fail',
            message: 'ID Not Found'
        })
    }
    res.status(204).json({
        status: 'success',
        message: 'successfully Updated'
    });

}

exports.deleteTour = (req, res) => {
    if ( +req.params.id > tours.length) {
        return res.status(400).json({
            status: 'fail',
            message: 'ID Not Found'
        })
    }
    res.status(204).json({
        status: 'success',
        message: 'successfully deleted'
    });

}