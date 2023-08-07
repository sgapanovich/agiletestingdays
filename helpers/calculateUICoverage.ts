let totalFeatures = 0;
let coveredFeatures = 0;
let totalPageFeatures = 0;
let coveredPageFeatures = 0;

export function calculateUICoverage(pages) {
  pages.forEach((page) => {
    iterateThroughFeature(page.features);

    console.log(
      `${page.page} page has ${
        Math.round((coveredPageFeatures / totalPageFeatures) * 100 * 100) / 100
      }% coverage`
    );

    // resetting count for the current page
    totalPageFeatures = 0;
    coveredPageFeatures = 0;
  });

  console.log(
    `\nTotal coverage is: ${
      Math.round((coveredFeatures / totalFeatures) * 100 * 100) / 100
    }%`
  );
}

function iterateThroughFeature(feature) {
  Object.entries(feature).forEach(([key, value]) => {
    if (typeof value === "object") {
      iterateThroughFeature(feature[key]);
    } else {
      addCount(value);
    }
  });
}

// since value will be either true of false based on that we add to features or coverage
function addCount(value) {
  if (value) {
    totalPageFeatures++;
    coveredPageFeatures++;
    totalFeatures++;
    coveredFeatures++;
  } else {
    totalPageFeatures++;
    totalFeatures++;
  }
}
