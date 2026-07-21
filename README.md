# Learning Playwright Fundamentals 2x

A comprehensive Playwright test automation learning project covering fundamental to advanced test automation concepts and practices.

## 📚 Project Structure

```
tests/
├── 01_Basics/                          # Basic Playwright test setup
├── 02_First_tests/                     # First running tests and basic context management
├── 03_Locators_Commands/               # Locator strategies and Playwright commands
├── 04_Session_Storage/                 # Session storage and local storage handling
├── 05_Allure_Reporting/                # Allure report integration
├── 06_Multiple_Element/                # Handling multiple elements
├── 07_Webtables/                       # Web table automation
├── 08_Web_Select_Frames_iframe/        # Select dropdowns and frame handling
├── 09_Frame_iframe/                    # iframe handling techniques
├── 10_Keyboard_Hover_Drag_Drop/        # Keyboard actions, hover, and drag-drop
├── 11_JS_Alerts/                       # JavaScript alert handling
├── 12_Handle_SVG/                      # SVG element handling
├── 13_Shadow_DOM/                      # Shadow DOM element interaction
├── 14_FileUpload/                      # File upload functionality
├── 15_File_Download/                   # File download handling
├── 16_Scroll_toElement/                # Scrolling and element positioning
├── 17_Expect_Assertions/               # Playwright assertions and expectations
├── 18_Test_Hooks/                      # Test lifecycle hooks (setup/teardown)
├── 19_Data_Driven_Testing/             # Data-driven test automation
├── 20_Page_Object_Model/               # Page Object Model pattern
├── 21_Fixture/                         # Playwright fixtures
├── 22_Misc_Concepts/                   # Miscellaneous advanced concepts
├── 23_Advance_Framework/               # Advanced framework implementation
└── Projects/                           # Real-world project examples
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

- Run all tests:
   ```bash
   npx playwright test
   ```

- Run tests in headed mode (see browser):
   ```bash
   npx playwright test --headed
   ```

- Run tests in debug mode:
   ```bash
   npx playwright test --debug
   ```

- Run specific test file:
   ```bash
   npx playwright test tests/01_Basics/229_Basic_Test.spec.ts
   ```

- Run tests matching a pattern:
   ```bash
   npx playwright test --grep "pattern"
   ```

- View test report:
   ```bash
   npx playwright show-report
   ```

## 📋 Test Modules Overview

| Module | Description |
|--------|-------------|
| **01_Basics** | Introduction to Playwright test structure and configuration |
| **02_First_tests** | First executable tests with browser context and page management |
| **03_Locators_Commands** | Locator strategies (CSS, XPath, role-based) and Playwright commands |
| **04_Session_Storage** | Browser storage, session storage, and local storage manipulation |
| **05_Allure_Reporting** | Integration and usage of Allure reporting framework |
| **06_Multiple_Element** | Techniques for selecting and interacting with multiple elements |
| **07_Webtables** | Web table navigation and data extraction |
| **08_Web_Select_Frames_iframe** | Select/dropdown elements and iframe handling |
| **09_Frame_iframe** | Advanced iframe interaction techniques |
| **10_Keyboard_Hover_Drag_Drop** | Keyboard actions, hover effects, and drag-drop operations |
| **11_JS_Alerts** | JavaScript alert, confirm, and prompt handling |
| **12_Handle_SVG** | SVG element selection and interaction |
| **13_Shadow_DOM** | Shadow DOM element piercing and interaction |
| **14_FileUpload** | File upload form handling |
| **15_File_Download** | File download interception and handling |
| **16_Scroll_toElement** | Page scrolling and element positioning |
| **17_Expect_Assertions** | Playwright assertions and expectations |
| **18_Test_Hooks** | beforeEach, afterEach, beforeAll, afterAll hooks |
| **19_Data_Driven_Testing** | Parameterized testing with multiple data sets |
| **20_Page_Object_Model** | Page Object Model design pattern implementation |
| **21_Fixture** | Custom Playwright fixtures |
| **22_Misc_Concepts** | Additional advanced concepts and best practices |
| **23_Advance_Framework** | Complex framework setup and patterns |

## 📁 Root Files

- **playwright.config.ts** - Playwright configuration (browsers, timeout, retry settings, etc.)
- **package.json** - Project dependencies and npm scripts
- **playwright-report/** - Generated HTML test reports
- **test-results/** - Test execution artifacts and failure details

## 💡 Key Concepts Covered

- ✅ Browser automation fundamentals
- ✅ Element locators and selectors
- ✅ User interactions (click, type, hover, drag-drop)
- ✅ Wait strategies and assertions
- ✅ Multiple browser contexts and pages
- ✅ Network interception and API mocking
- ✅ Screenshot and video recording
- ✅ Test reporting and debugging
- ✅ Page Object Model pattern
- ✅ Data-driven testing
- ✅ Test fixtures and hooks
- ✅ Advanced browser automation scenarios

## ⚙️ Configuration

Test configuration is managed in `playwright.config.ts`. You can modify:
- Supported browsers (Chromium, Firefox, WebKit)
- Timeout settings
- Retry attempts for flaky tests
- Report output formats
- And more...

## 📝 Notes

- Dependencies are not committed; install them locally with `npm install`
- Generated reports and test artifacts (`playwright-report/`, `test-results/`) are ignored by Git
- Each test module builds upon previous concepts with increasing complexity

## 🔗 Resources

- [Playwright Official Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

---

Happy Testing! 🎭
