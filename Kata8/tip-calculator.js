function calculateTip(amount, rating) {
    switch (rating.toLowerCase()) {
      case "terrible":
        return 0;
        break;
      case "poor":
        return Math.ceil(amount * 0.05);
        break;
      case "good":
        return Math.ceil(amount * 0.10);
        break;
      case "great":
        return Math.ceil(amount * 0.15);
        break;
      case "excellent":
        return Math.ceil(amount * 0.20);
        break;
      default:
        return "Rating not recognised"
    }
}