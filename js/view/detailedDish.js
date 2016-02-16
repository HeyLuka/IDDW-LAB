// Constructor of the page which returns users the detailed information about a single dish.
var DetailedDish = function(container) {
	// Get all relavant elements of the view
	this.main_content = container.find("#main-content");
	this.selectDish_panel = container.find("#selectDish-panel");

	this.selectDish_panel.hide();

	// try hidding components that is not used in this page
	//this.mydinner_bar.hide();
	//this.main_content.hide();
	// this.selectdish_panel.hide();
	this.dishInfo_panel = container.find("#dishInfo-panel");
	// this.dishInfo_panel.hide();
	this.confirmDinner_page = container.find("#confirmDinner-page");
	this.confirmDinner_page.hide();
	this.printoutMenu_page = container.find("#printoutMenu-page");
	this.printoutMenu_page.hide();

	// Functions to be handled in this page
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.text(model.numberOfGuests);

	this.dish_description = container.find("#dish-description");
	this.dish_ingredient_table_tbody = container.find("#dish-ingredient-tbody");
	this.dish_preparation = container.find("#dish-preparation");

	var dish_desc_title = document.createElement('h3');
	var test_dish_id = 1;
	$(dish_desc_title).text(model.getDish(test_dish_id).name);
	var dish_desc_image = document.createElement('img');
	$(dish_desc_image).attr({"src": "./images/"+model.getDish(test_dish_id).image});
	var dish_desc_words = document.createElement('p');
	$(dish_desc_words).text(model.getDish(test_dish_id).description);

	this.dish_description.append(dish_desc_title);
	this.dish_description.append(dish_desc_image);
	this.dish_description.append(dish_desc_words);

	// show ingredients list related with this dish
	for(index in model.getDish(test_dish_id).ingredients){
		var dish_inge_instance = document.createElement('tr');


		var instance_name = document.createElement('td');
		$(instance_name).text(model.getDish(test_dish_id).ingredients[index].name);
		var instance_amount = document.createElement('td');
		$(instance_amount).html(model.getDish(test_dish_id).ingredients[index].quantity + " " + model.getDish(test_dish_id).ingredients[index].unit);
		var instance_currency = document.createElement('td');
		$(instance_currency).html('<td>SEK</td>');
		var instance_price = document.createElement('td');
	 	$(instance_price).html(model.getDish(test_dish_id).ingredients[index].price);

		$(dish_inge_instance).append(instance_amount);
		$(dish_inge_instance).append(instance_name);
		$(dish_inge_instance).append(instance_currency);
		$(dish_inge_instance).append(instance_price);

		this.dish_ingredient_table_tbody.append(dish_inge_instance);
	}

	// show preparation steps related with this dish





}