
$(function() {
  // test suite named "RSS Feeds"
    describe('RSS Feeds', function() {
       // Test allFeeds are defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Test feed URLs are defined and contain content
        it('all URL defined and not empty', function() {
            //loops to ensure URL is defined and not empty.
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        //Test feed names are defined and contain content 
         it('allFeeds has name defined and not empty', function() {
            //loops to ensure allFeeds has name defined and not empty.
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });  
    });

    // test suite named "The menu" 
    describe('The menu', function(){

        //Test menu element is hidden by default on page load
         it('menu hidden by default', function() {
            //ensures the menu element is hidden by default.
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //Test to ensure the menu changes visibility when the menu icon is clicked
          it('menu changes', function(){
            $('.menu-icon-link').click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $('.menu-icon-link').click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
          });
    });

    //test suite named "Initial Entries" 
    describe('Initial Entries', function(){

         //Test at least one entry displays on load after async call
        beforeEach(function(done) {
            loadFeed(0, function(){
            done();
            });
        });

        it('entry element', function(){
            //expect($('.entry').length).toBeGreaterThan(0);
             expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    //new test suite named "New Feed Selection" 
    describe('New Feed Selection', function(){

        var Entry1;
        var Entry2;
        // Test that new content is loaded by loadFeed().
        beforeEach(function(done) {
            loadFeed(0, function(){
                Entry1 = $('.feed').html();
            loadFeed(1, function(){
                Entry2 = $('.feed').html();
            done();
             });
            });
        });
        
        afterAll(function(){
            loadFeed(0);
        });
         //Test entry changes on menu select
        it('content changes', function(){
            expect(Entry1).not.toEqual(Entry2);
        });
    });
    
}());
