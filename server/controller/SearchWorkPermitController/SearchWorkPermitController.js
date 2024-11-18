const WorkPermitModel = require("../../model/WorkPermitModel/WorkPermitModel");

const SearchWorkPermitController = async (req, res) => {
    try {
        const { searchDate } = req.body;
        console.log(searchDate);

        const formattedSearchDate = searchDate.replace(/\./g, "-");
        console.log(formattedSearchDate);

        // Find all work permits
        const workPermits = await WorkPermitModel.find();

        // Filter work permits that match the given date
        const filteredWorkPermits = workPermits.filter((item) => {
            const date = new Date(item.permitCreateTime);
            const formattedDate = date.toISOString().split('T')[0]; // "YYYY-MM-DD"
            return formattedDate === formattedSearchDate;
        });

        // Send response with filtered results
        res.status(200).send({
            success: true,
            message: "Filter Successful",
            data: filteredWorkPermits,
        });

    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { SearchWorkPermitController };
