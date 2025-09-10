
export interface Algorithm {
  title: string;
  complexity: string;
  bestCase: string;
  averageCase: string;
  worstCase: string;
  javaCode: string;
  data: {
    n: number[];
    time: number[];
  };
}

export const algorithms: Algorithm[] = [
  {
    title: 'Constant Time',
    complexity: 'O(1)',
    bestCase: 'O(1)',
    averageCase: 'O(1)',
    worstCase: 'O(1)',
    javaCode: `
// Accessing an array element
public int getFirstElement(int[] arr) {
  return arr[0]; // Always 1 operation
}
    `,
    data: {
      n: [10, 20, 30, 40, 50, 100],
      time: [1, 1, 1, 1, 1, 1],
    },
  },
  {
    title: 'Logarithmic Time',
    complexity: 'O(log n)',
    bestCase: 'O(1)',
    averageCase: 'O(log n)',
    worstCase: 'O(log n)',
    javaCode: `
// Binary Search
public int binarySearch(int[] arr, int target) {
  int low = 0;
  int high = arr.length - 1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
    `,
    data: {
      n: [10, 20, 30, 40, 50, 100, 1000, 10000],
      time: [3.32, 4.32, 4.9, 5.32, 5.64, 6.64, 9.96, 13.28],
    },
  },
  {
    title: 'Linear Time',
    complexity: 'O(n)',
    bestCase: 'O(1)',
    averageCase: 'O(n)',
    worstCase: 'O(n)',
    javaCode: `
// Sum of array elements
public int sumArray(int[] arr) {
  int sum = 0;
  for (int num : arr) {
    sum += num;
  }
  return sum;
}
    `,
    data: {
      n: [10, 20, 30, 40, 50, 100],
      time: [10, 20, 30, 40, 50, 100],
    },
  },
  {
    title: 'Linearithmic Time',
    complexity: 'O(n log n)',
    bestCase: 'O(n log n)',
    averageCase: 'O(n log n)',
    worstCase: 'O(n log n)',
    javaCode: `
// Merge Sort
public void mergeSort(int[] arr, int l, int r) {
  if (l < r) {
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
}

// Helper for merge sort
void merge(int arr[], int l, int m, int r) {
    // ... implementation ...
}
    `,
    data: {
        n: [10, 20, 30, 40, 50, 100],
        time: [33.2, 86.4, 147, 212.8, 282, 664],
    },
  },
  {
    title: 'Quadratic Time',
    complexity: 'O(n²)',
    bestCase: 'O(n)',
    averageCase: 'O(n²)',
    worstCase: 'O(n²)',
    javaCode: `
// Bubble Sort
public void bubbleSort(int[] arr) {
  int n = arr.length;
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
    `,
    data: {
      n: [10, 20, 30, 40, 50, 100],
      time: [100, 400, 900, 1600, 2500, 10000],
    },
  },
];
