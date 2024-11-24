const asyncHandler = (fn) => (req, res, next) => 
    Promise.resolve(fn(req, res, next)).catch(next);
  
  export default asyncHandler;

  // this will mean mean we dont need to write out the whole syntax each time
  // Also, mongoose methods are async