amodule.exports = {

    // html for manager
    const generateManager = manager => {
        return 
        `<div class = "card employee-card">
        <div class = "card-header">
            <h2 class = "card-title"><i class="fas fa-glasses mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class = "card-body">
            <ul class = "list-group">
                <li class = "list-group-item">ID: ${manager.getID()}</li>
                <li class = "list-group-item">Email: <a href="mailto:${manager.getEmail()}>${manager.getEmail()}</li>
                <li class = "list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        `
    }
}