import Text "mo:core/Text";
import Array "mo:core/Array";

actor {
  // Product type and sample products
  type Product = {
    name : Text;
    description : Text;
    price : Float;
    imageUrl : Text;
    aiScore : Float;
    rating : Float;
    category : Text;
  };

  let products : [Product] = [
    {
      name = "Laptop Pro X";
      description = "High performance laptop for professionals";
      price = 1299.99;
      imageUrl = "laptop_image.png";
      aiScore = 8.5;
      rating = 4.7;
      category = "Electronics";
    },
    {
      name = "Smart Watch";
      description = "Stay connected on the go";
      price = 299.99;
      imageUrl = "smartwatch_image.png";
      aiScore = 7.2;
      rating = 4.4;
      category = "Electronics";
    },
    {
      name = "Leather Jacket";
      description = "Stylish and comfortable";
      price = 149.99;
      imageUrl = "jacket_image.png";
      aiScore = 6.8;
      rating = 4.5;
      category = "Fashion";
    },
    {
      name = "Designer Handbag";
      description = "Timeless fashion statement";
      price = 199.99;
      imageUrl = "handbag_image.png";
      aiScore = 5.5;
      rating = 4.8;
      category = "Fashion";
    },
    {
      name = "Smart Thermostat";
      description = "Control home temperature from phone";
      price = 99.99;
      imageUrl = "thermostat_image.png";
      aiScore = 7.8;
      rating = 4.6;
      category = "Home";
    },
    {
      name = "LED Floor Lamp";
      description = "Adjustable brightness for reading";
      price = 59.99;
      imageUrl = "lamp_image.png";
      aiScore = 4.9;
      rating = 4.3;
      category = "Home";
    },
  ];

  // Editor Feature type and sample features
  type EditorFeature = {
    title : Text;
    description : Text;
    icon : Text;
  };

  let editorFeatures : [EditorFeature] = [
    {
      title = "Drag-and-Drop";
      description = "Easily rearrange elements visually";
      icon = "drag_icon";
    },
    {
      title = "AI Assets";
      description = "Smartly suggest images and assets";
      icon = "ai_icon";
    },
    {
      title = "Live Preview";
      description = "See real-time changes as you edit";
      icon = "preview_icon";
    },
  ];

  // Get all products
  public query ({ caller }) func getAllProducts() : async [Product] {
    products;
  };

  // Get products by category
  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    products.filter(func(p) { Text.equal(p.category, category) });
  };

  // Get all editor features
  public query ({ caller }) func getAllEditorFeatures() : async [EditorFeature] {
    editorFeatures;
  };
};
