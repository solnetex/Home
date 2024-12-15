<script>
    document.querySelector('.gallery-container').addEventListener('wheel', function(e) {
        const container = this;

        // Check if we're at the left or right edge
        const atLeftEdge = container.scrollLeft === 0;
        const atRightEdge = container.scrollLeft + container.offsetWidth >= container.scrollWidth;

        // If we are scrolling vertically (deltaY is vertical scroll)
        if (e.deltaY !== 0) {
            e.preventDefault();  // Prevent default scrolling behavior

            // When we're at the right edge and trying to scroll right (deltaY > 0), switch to vertical scrolling
            if (atRightEdge && e.deltaY > 0) {
                container.scrollTop += e.deltaY;  // Scroll vertically
            }
            // If we're not at the left edge, continue horizontal scrolling
            else if (!atLeftEdge) {
                container.scrollLeft += e.deltaY;  // Horizontal scroll
            }
            // If we're at the left edge, continue horizontal scroll
            else {
                container.scrollLeft += e.deltaY;  // Continue horizontal scroll
            }
        }
    });
</script>


html: <source src="VIVID AXIS.mp4" type="video/mp4">