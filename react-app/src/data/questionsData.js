export const DATA = {
  sections: [
    {
      id: "behavioral",
      title: "About You & Behavioral Questions",
      icon: "🟢",
      questions: [
        {
          id: 1,
          q: "Tell me about yourself and your journey into QA Automation.",
          a: "I started with manual testing, then learned Python and Selenium to automate repetitive regression tests. I built a full automation framework for SleepApneaBD.com using POM pattern, Pytest, Allure reports, and GitHub Actions CI/CD. I focus on preventing bugs early, not just finding them.",
          tip: "Keep it under 90 seconds. Structure: Past, Present, Future.",
          diff: "easy",
          keywords: ["manual testing", "Python", "Selenium", "POM", "Pytest", "Allure", "CI/CD", "automation framework", "preventing bugs"]
        },
        {
          id: 2,
          q: "Why did you choose QA Automation over development?",
          a: "I enjoy the detective mindset breaking things to make them stronger. Automation lets me combine coding skills with quality thinking. I write code that validates other code.",
          tip: "Show passion, not that you settled for QA.",
          diff: "easy",
          keywords: ["detective", "breaking things", "coding skills", "quality", "validates", "automation", "development"]
        },
        {
          id: 3,
          q: "Walk me through your SleepApneaBD.com project.",
          a: "Healthcare e-commerce site. POM-based framework with page classes for Home, Product, Cart, Checkout. 50+ test cases covering smoke, regression, cross-browser, form validation, SEO. Allure reporting. GitHub Actions CI/CD with nightly runs. Reports on GitHub Pages.",
          tip: "Use STAR format. Mention specific numbers.",
          diff: "medium",
          keywords: ["healthcare", "e-commerce", "POM", "page classes", "50+ Testing", "smoke", "regression", "cross-browser", "Allure", "GitHub Actions"]
        },
        {
          id: 4,
          q: "Give a real example of preventing bugs not just finding them.",
          a: "Added automated SEO validation tests early in CI pipeline. Meta tags, alt attributes, heading hierarchy. Caught missing meta descriptions before staging. Prevented SEO ranking issues post-launch.",
          tip: "Concrete example beats abstract philosophy.",
          diff: "medium",
          keywords: ["SEO", "meta tags", "alt attributes", "CI pipeline", "staging", "preventing", "automated"]
        },
        {
          id: 5,
          q: "How do you prioritize which test cases to automate first?",
          a: "Automation pyramid: 1) High-frequency regression, 2) Critical business flows like login and checkout, 3) Data-driven scenarios, 4) Tedious manual tests. Avoid one-time or visual judgment tests. Focus on ROI.",
          tip: "Mention ROI.",
          diff: "medium",
          keywords: ["automation pyramid", "regression", "critical", "login", "checkout", "data-driven", "ROI", "prioritize"]
        },
        {
          id: 6,
          q: "Describe when automation caught a critical bug before production.",
          a: "Nightly regression caught broken checkout after CSS update changed button class. Reported with Allure screenshots. Dev fixed before morning deployment. Users would not have been able to purchase.",
          tip: "Show business impact.",
          diff: "medium",
          keywords: ["nightly", "regression", "checkout", "CSS", "Allure", "screenshots", "deployment", "business impact"]
        },
        {
          id: 7,
          q: "How do you handle disagreement with a developer about a bug?",
          a: "Present evidence: steps to reproduce, screenshots, expected vs actual, reference requirements. Escalate to product owner if needed. Keep it professional, same team same goal.",
          tip: "Data wins arguments.",
          diff: "easy",
          keywords: ["evidence", "steps to reproduce", "screenshots", "expected", "actual", "product owner", "escalate", "professional"]
        },
        {
          id: 8,
          q: "Tell me about a time your framework failed and how you fixed it.",
          a: "After site redesign 30% of locators broke. Refactored to data-testid attributes. Centralized locator files per page class. Added self-healing fallback logic. Maintenance dropped 60%.",
          tip: "Show learning not just failure.",
          diff: "medium",
          keywords: ["redesign", "locators", "data-testid", "centralized", "page class", "self-healing", "maintenance"]
        },
        {
          id: 9,
          q: "How do you explain test results to non-technical stakeholders?",
          a: "Allure dashboards with charts. Pass/fail percentages, trends, severity breakdowns. Business language: Out of 80 critical tests 78 passed. 2 failures in checkout, here is the risk.",
          tip: "Translate to business risk.",
          diff: "easy",
          keywords: ["Allure", "dashboards", "charts", "pass/fail", "trends", "severity", "business risk", "stakeholders"]
        },
        {
          id: 10,
          q: "Where do you see yourself in 3 years?",
          a: "Leading QA automation team or Senior SDET. Expand into API testing, performance testing with Locust, AI-assisted testing. Mentor juniors. Contribute to open-source.",
          tip: "Show growth aligned with company.",
          diff: "easy",
          keywords: ["QA team", "Senior SDET", "API testing", "performance", "Locust", "AI", "mentor", "open-source"]
        }
      ]
    },
    {
      id: "python",
      title: "Python Technical Questions",
      icon: "🟡",
      questions: [
        {
          id: 11,
          q: "What Python data structures do you use most in test automation?",
          a: "Dictionaries for test data and config. Lists for test inputs and elements. Sets for removing duplicates. Tuples for immutable locators like (By.ID, username) in POM.",
          tip: "Give testing use case for each.",
          diff: "medium",
          keywords: ["dictionaries", "lists", "sets", "tuples", "immutable", "locators", "POM", "duplicates"]
        },
        {
          id: 12,
          q: "Difference between list, tuple, set, and dictionary.",
          a: "List: ordered, mutable, duplicates allowed. Tuple: ordered, immutable. Set: unordered, no duplicates. Dictionary: key-value pairs. Testing use: tuples for locators, dicts for data, lists for steps.",
          tip: "Connect to testing usage.",
          diff: "easy",
          keywords: ["list", "tuple", "set", "dictionary", "ordered", "mutable", "immutable", "key-value"]
        },
        {
          id: 13,
          q: "How do you handle exceptions in Python for testing?",
          a: "try/except/finally blocks. Try find popup close, except NoSuchElementException pass. Let assertion errors propagate for Pytest. Finally for cleanup like browser quit.",
          tip: "Catch for recovery, let fail for assertions.",
          diff: "medium",
          keywords: ["try", "except", "finally", "NoSuchElementException", "assertions", "propagate", "cleanup"]
        },
        {
          id: 14,
          q: "What are decorators? Have you used any?",
          a: "Decorators wrap functions to add behavior. I use @pytest.fixture for setup/teardown, @pytest.mark.parametrize for data-driven, @allure.story for reporting, custom @retry for flaky fixes.",
          tip: "Mention built-in and custom.",
          diff: "medium",
          keywords: ["decorators", "wrap", "@pytest.fixture", "@pytest.mark.parametrize", "@allure", "retry", "setup", "teardown"]
        },
        {
          id: 15,
          q: "Difference between assert, try/except, and pytest.raises.",
          a: "assert validates condition, fails if False. try/except handles exceptions. pytest.raises tests code SHOULD raise exception. Assert for validations, pytest.raises for negative testing.",
          tip: "Show when to use which.",
          diff: "medium",
          keywords: ["assert", "try/except", "pytest.raises", "validates", "exception", "negative testing"]
        },
        {
          id: 16,
          q: "How do you read data from CSV/JSON/Excel for testing?",
          a: "CSV with csv module or pandas. JSON with json.load. Excel with openpyxl. I store test data in JSON, use @parametrize with helper function.",
          tip: "Mention why you chose specific format.",
          diff: "medium",
          keywords: ["CSV", "JSON", "Excel", "pandas", "openpyxl", "json.load", "parametrize", "data-driven"]
        },
        {
          id: 17,
          q: "Difference between deepcopy and shallow copy.",
          a: "Shallow copy references nested objects, changes affect both. Deep copy creates independent clone. In testing use deepcopy for test data variations from template.",
          tip: "Give practical testing scenario.",
          diff: "medium",
          keywords: ["shallow copy", "deep copy", "deepcopy", "nested", "independent", "clone", "template", "test data"]
        },
        {
          id: 18,
          q: "How do you manage environment variables and config?",
          a: "config.py or .env with python-dotenv. Load with os.getenv. CI/CD uses GitHub Secrets. Structure: base_config, dev_config, prod_config. Never hardcode credentials.",
          tip: "Never hardcode credentials.",
          diff: "medium",
          keywords: ["config", ".env", "python-dotenv", "os.getenv", "GitHub Secrets", "credentials", "environment"]
        },
        {
          id: 19,
          q: "Write a function that returns broken URLs.",
          a: "Use requests library. Loop URLs, requests.get with timeout 10. If status_code >= 400 add to broken list. Catch RequestException for connection errors.",
          tip: "Handle timeouts and exceptions.",
          diff: "medium",
          keywords: ["requests", "status_code", "400", "timeout", "broken", "RequestException", "function"]
        },
        {
          id: 20,
          q: "What are list comprehensions? Give a testing example.",
          a: "Create lists in one line with filtering. failed = [t.name for t in results if t.status == 'fail']. Readable for simple transforms.",
          tip: "Keep readable, avoid nested.",
          diff: "easy",
          keywords: ["list comprehension", "filter", "one line", "for", "if", "status", "failed", "results"]
        }
      ]
    },
    {
      id: "python_sdet",
      title: "Python Advanced & SDET Scripting",
      icon: "🐍",
      questions: [
        {
          id: 106,
          q: "How do you automate API test validation using Python?",
          a: "I use the requests library to send HTTP requests. I assert response status codes (e.g. response.status_code == 200), parse the JSON payload using response.json(), and validate the JSON schema structure using the jsonschema library to ensure contract compliance.",
          tip: "Mention status_code, response.json(), and jsonschema.",
          diff: "medium",
          keywords: ["requests", "status_code", "response.json", "jsonschema", "HTTP requests", "validation"]
        },
        {
          id: 107,
          q: "How do you connect to databases for testing assertions in Python?",
          a: "I use database adapters like pymysql for MySQL or psycopg2 for PostgreSQL. I write a database helper utility using Python context managers (with statement) to safely open/close connections, run SQL queries, and validate database values against UI parameters.",
          tip: "Mention context managers, SQL query validation, and pymysql/psycopg2.",
          diff: "hard",
          keywords: ["pymysql", "psycopg2", "context managers", "database helper", "connections", "SQL queries", "assertions"]
        },
        {
          id: 108,
          q: "How do you process JSON and Excel data for data-driven testing in Python?",
          a: "I parse JSON using built-in json library (json.load). For Excel files, I use pandas or openpyxl to read sheet rows. I load this data into a list of dictionaries and feed them into pytest fixtures using @pytest.mark.parametrize.",
          tip: "Mention openpyxl, pandas, json.load, and parametrize.",
          diff: "medium",
          keywords: ["json.load", "pandas", "openpyxl", "pytest fixtures", "parametrize", "data-driven"]
        },
        {
          id: 109,
          q: "How do you execute OS terminal commands from a Python test script?",
          a: "I use the subprocess library. I call subprocess.run(['command', 'args'], capture_output=True, text=True) to run external test tools (like maven tests, git status, or environment diagnostics) and assert the standard output (stdout) or exit code.",
          tip: "Mention subprocess.run and stdout.",
          diff: "hard",
          keywords: ["subprocess", "subprocess.run", "capture_output", "external tools", "stdout", "exit code"]
        },
        {
          id: 110,
          q: "How do you manage session authentications (OAuth/Tokens) efficiently in Python?",
          a: "I use requests.Session() to persist headers, cookies, and session state. I fetch the OAuth token once during session startup, inject it into session.headers['Authorization'], and reuse that session object for all subsequent API requests.",
          tip: "Emphasize requests.Session() to persist auth tokens.",
          diff: "medium",
          keywords: ["Session", "requests.Session", "OAuth token", "Authorization", "headers", "subsequent"]
        }
      ]
    },
    {
      id: "selenium",
      title: "Selenium WebDriver Questions",
      icon: "🔵",
      questions: [
        {
          id: 21,
          q: "Explain Selenium WebDriver architecture.",
          a: "Client sends commands via W3C WebDriver Protocol over HTTP to Browser Driver like ChromeDriver which controls Browser. Client-server architecture.",
          tip: "Mention W3C protocol.",
          diff: "medium",
          keywords: ["W3C", "WebDriver Protocol", "HTTP", "ChromeDriver", "client-server", "browser driver"]
        },
        {
          id: 22,
          q: "What locator strategies do you prefer?",
          a: "8 strategies: ID, Name, CSS Selector, XPath etc. Prefer data-testid for stability, CSS for speed, XPath only for DOM traversal. Avoid absolute XPath.",
          tip: "Justify with maintenance reasons.",
          diff: "easy",
          keywords: ["ID", "CSS Selector", "XPath", "data-testid", "locator", "stable", "fast"]
        },
        {
          id: 23,
          q: "Difference between find_element and find_elements.",
          a: "find_element returns first match, raises NoSuchElementException if not found. find_elements returns list, empty if none, no exception. Use find_elements for safe existence check.",
          tip: "Exception behavior is key.",
          diff: "easy",
          keywords: ["find_element", "find_elements", "first", "list", "NoSuchElementException", "empty list"]
        },
        {
          id: 24,
          q: "How do you handle dynamic elements with changing IDs?",
          a: "Use data-testid, name, aria-label. Relative XPath with contains. CSS partial match. Parent sibling relationships. Ask devs to add data-testid.",
          tip: "Collaborate with devs.",
          diff: "medium",
          keywords: ["data-testid", "aria-label", "contains", "partial match", "relative XPath", "stable", "dynamic"]
        },
        {
          id: 25,
          q: "Explain Explicit vs Implicit vs Fluent Wait.",
          a: "Implicit is global timeout, bad practice. Explicit uses WebDriverWait with EC condition, best practice. Fluent adds custom polling. Never mix implicit and explicit.",
          tip: "Never mix.",
          diff: "medium",
          keywords: ["Implicit Wait", "Explicit Wait", "Fluent Wait", "WebDriverWait", "EC", "polling", "never mix"]
        },
        {
          id: 26,
          q: "How do you handle dropdowns, alerts, iframes?",
          a: "Dropdown: Select class. Custom: click open then click option. Alert: switch_to.alert accept or dismiss. Iframe: switch_to.frame then default_content.",
          tip: "HTML select vs custom.",
          diff: "medium",
          keywords: ["Select", "select_by_visible_text", "switch_to.alert", "accept", "dismiss", "switch_to.frame", "iframe"]
        },
        {
          id: 27,
          q: "How do you handle file uploads and downloads?",
          a: "Upload: send_keys to input type file with absolute path. Download: configure browser prefs for auto download. Verify with os.path.",
          tip: "send_keys is simplest.",
          diff: "medium",
          keywords: ["send_keys", "input", "file", "upload", "download", "browser preferences", "os.path"]
        },
        {
          id: 28,
          q: "Difference between close() and quit().",
          a: "close closes current tab. quit closes ALL windows and terminates session. Always quit in teardown to prevent orphaned processes.",
          tip: "CI/CD memory leak.",
          diff: "easy",
          keywords: ["close", "quit", "current tab", "ALL windows", "terminates", "teardown"]
        },
        {
          id: 29,
          q: "How do you handle multiple tabs?",
          a: "Store main = current_window_handle. Switch to window_handles[1]. Do actions. Close. Switch back to main.",
          tip: "Store and switch back.",
          diff: "medium",
          keywords: ["current_window_handle", "window_handles", "switch_to.window", "tabs", "switch back"]
        },
        {
          id: 30,
          q: "How do you take screenshots on failure?",
          a: "Pytest fixture with yield. If fail call save_screenshot. Attach to Allure as PNG. Use makereport hook.",
          tip: "Allure integration.",
          diff: "medium",
          keywords: ["save_screenshot", "allure.attach", "PNG", "fixture", "yield", "makereport", "failure"]
        },
        {
          id: 31,
          q: "What is StaleElementReferenceException?",
          a: "Element was found but DOM changed. Fix: relocate, Explicit Wait, find inside method not init, retry decorator.",
          tip: "DOM changed after find.",
          diff: "medium",
          keywords: ["StaleElementReferenceException", "DOM", "relocate", "Explicit Wait", "AJAX", "retry"]
        },
        {
          id: 32,
          q: "How to scroll, hover, drag-drop, right-click?",
          a: "ActionChains: hover move_to_element. Right-click context_click. Drag drag_and_drop. Scroll execute_script scrollIntoView.",
          tip: "Selenium 4 methods.",
          diff: "medium",
          keywords: ["ActionChains", "move_to_element", "context_click", "drag_and_drop", "scrollIntoView"]
        },
        {
          id: 33,
          q: "How handle CAPTCHA or OTP?",
          a: "Never automate CAPTCHA. Disable in test env. API backdoor. Fixed test OTP. Cookies to skip login.",
          tip: "Bypass never solve.",
          diff: "medium",
          keywords: ["CAPTCHA", "OTP", "bypass", "disable", "test environment", "backdoor", "cookies"]
        },
        {
          id: 34,
          q: "What is headless testing?",
          a: "Browser without GUI using headless flag. Use in CI/CD. 20-30% faster. Avoid for visual debugging. Headless in CI, headed locally.",
          tip: "Speed and CI/CD.",
          diff: "easy",
          keywords: ["headless", "GUI", "CI/CD", "faster", "no display", "debugging"]
        },
        {
          id: 35,
          q: "How handle SSL errors?",
          a: "Chrome ignore-certificate-errors or acceptInsecureCerts. Only for test env. Production should fail on SSL errors.",
          tip: "Only test environments.",
          diff: "easy",
          keywords: ["SSL", "certificate", "ignore-certificate-errors", "acceptInsecureCerts", "test environment"]
        }
      ]
    },
    {
      id: "pytest",
      title: "Pytest Framework",
      icon: "🟣",
      questions: [
        {
          id: 36,
          q: "Why Pytest over unittest?",
          a: "Simple assert. Powerful fixtures with scope. Auto discovery. Rich plugins. Parametrize. Custom markers. Better diffs.",
          tip: "3-4 advantages.",
          diff: "easy",
          keywords: ["assert", "fixtures", "scope", "auto discovery", "plugins", "parametrize", "markers"]
        },
        {
          id: 37,
          q: "Explain Pytest fixtures.",
          a: "Setup/teardown via @pytest.fixture. Browser scope session. Page scope function. Yield pattern: before=setup after=teardown.",
          tip: "Yield pattern.",
          diff: "medium",
          keywords: ["fixture", "setup", "teardown", "yield", "scope", "session", "function", "browser"]
        },
        {
          id: 38,
          q: "Fixture scope session vs function?",
          a: "Function runs every test fresh state. Session runs once shared. Session for browser, function for pages.",
          tip: "WHY each scope.",
          diff: "medium",
          keywords: ["scope", "session", "function", "fresh state", "shared", "expensive"]
        },
        {
          id: 39,
          q: "How to parameterize tests?",
          a: "@pytest.mark.parametrize with args and values. Email validation example. Runs separate test per combo.",
          tip: "Real example.",
          diff: "medium",
          keywords: ["parametrize", "mark", "data-driven", "form validation", "email"]
        },
        {
          id: 40,
          q: "Explain conftest.py.",
          a: "Shared fixture file auto-available. No import needed. Root: browser. Tests: page objects.",
          tip: "No imports.",
          diff: "medium",
          keywords: ["conftest", "shared", "auto-available", "no import", "browser", "organize"]
        },
        {
          id: 41,
          q: "Explain skip, xfail, custom markers.",
          a: "skip to skip. skipif conditional. xfail expected fail. Custom smoke regression. Register pytest.ini. Run -m smoke.",
          tip: "Register in pytest.ini.",
          diff: "medium",
          keywords: ["skip", "xfail", "custom markers", "smoke", "regression", "pytest.ini", "-m"]
        },
        {
          id: 42,
          q: "How run subset of tests?",
          a: "By marker -m smoke. By keyword -k login. By file. By function. Combine -m smoke and not slow.",
          tip: "Command-line fluency.",
          diff: "easy",
          keywords: ["-m", "-k", "marker", "keyword", "file", "combine", "smoke"]
        },
        {
          id: 43,
          q: "Pytest-html vs Allure?",
          a: "Pytest-html simple HTML. Allure rich dashboard trends categories attachments history severity.",
          tip: "When to use which.",
          diff: "medium",
          keywords: ["pytest-html", "Allure", "dashboard", "trends", "categories", "attachments", "severity"]
        },
        {
          id: 44,
          q: "How handle test dependencies?",
          a: "Tests MUST be independent. Own state via fixtures. Use API cookies not other test results.",
          tip: "No dependencies.",
          diff: "medium",
          keywords: ["independent", "fixtures", "state", "API", "cookies", "no dependencies"]
        },
        {
          id: 45,
          q: "How run parallel tests?",
          a: "pytest-xdist -n 4 or -n auto. Independent tests separate browsers. 30min to 8min.",
          tip: "Independence prerequisite.",
          diff: "medium",
          keywords: ["pytest-xdist", "-n", "parallel", "independent", "separate browser", "speed"]
        }
      ]
    },
    {
      id: "framework",
      title: "Framework Design",
      icon: "🟠",
      questions: [
        {
          id: 46,
          q: "Explain POM.",
          a: "Separates page structure from tests. Each page class with locators and methods. One UI change one code change. BasePage then specific pages.",
          tip: "Class hierarchy.",
          diff: "medium",
          keywords: ["POM", "page structure", "locators", "methods", "BasePage", "one code change"]
        },
        {
          id: 47,
          q: "Your project folder structure?",
          a: "pages/ tests/ utils/ test_data/ reports/ .github/workflows/ pytest.ini requirements.txt",
          tip: "Memorize this.",
          diff: "medium",
          keywords: ["pages", "tests", "utils", "test_data", "reports", "workflows", "conftest", "requirements.txt"]
        },
        {
          id: 48,
          q: "How manage test data separately?",
          a: "JSON CSV in test_data/. data_reader loads. Feed via parametrize or fixtures. Same test many scenarios.",
          tip: "Separation of concerns.",
          diff: "medium",
          keywords: ["JSON", "CSV", "test_data", "data_reader", "parametrize", "separation"]
        },
        {
          id: 49,
          q: "Config for different environments?",
          a: ".env files with python-dotenv. pytest --env staging. conftest reads config. GitHub Secrets in CI/CD.",
          tip: "CLI to config to tests.",
          diff: "medium",
          keywords: [".env", "python-dotenv", "base_url", "--env", "conftest", "GitHub Secrets"]
        },
        {
          id: 50,
          q: "Design patterns in automation?",
          a: "POM for UI. Factory for drivers. Singleton for browser. Builder for data. Decorator for retry.",
          tip: "Use 2-3 patterns.",
          diff: "hard",
          keywords: ["POM", "Factory", "Singleton", "Builder", "Decorator", "design patterns"]
        },
        {
          id: 51,
          q: "Scalable for 500+ tests?",
          a: "Strict POM. Modular conftest. Parallel xdist. CSS over XPath. Separate data. Tags. Clean teardown. Reusable utils.",
          tip: "Real numbers.",
          diff: "hard",
          keywords: ["data-driven", "keyword-driven", "hybrid", "parametrize", "POM", "JSON"]
        }
      ]
    },
    {
      id: "cicd",
      title: "CI/CD & GitHub Actions",
      icon: "🔴",
      questions: [
        {
          id: 56,
          q: "Explain your GitHub Actions workflow.",
          a: "Trigger push schedule manual. Setup Ubuntu Python Chrome. Install requirements. Run pytest alluredir. Screenshots on failure. Publish Allure Pages. Notify failure.",
          tip: "Walk through YAML.",
          diff: "medium",
          keywords: ["trigger", "push", "schedule", "Ubuntu", "Python", "Chrome", "pytest", "alluredir", "GitHub Pages"]
        },
        {
          id: 57,
          q: "How trigger tests?",
          a: "Push for smoke. Cron nightly for regression. workflow_dispatch manual. PR for affected tests.",
          tip: "Different triggers.",
          diff: "medium",
          keywords: ["push", "schedule", "cron", "workflow_dispatch", "smoke", "regression", "PR"]
        },
        {
          id: 58,
          q: "Handle failures in CI/CD?",
          a: "Smoke blocks deployment. Regression alerts team. Auto screenshots Allure report Slack notification.",
          tip: "Blocking vs non-blocking.",
          diff: "medium",
          keywords: ["block deployment", "alert", "screenshot", "Allure", "Slack", "smoke", "regression"]
        },
        {
          id: 59,
          q: "YAML structure?",
          a: "name on jobs runs-on steps: checkout setup-python pip pytest upload-artifact if always.",
          tip: "Write from memory.",
          diff: "medium",
          keywords: ["name", "on", "jobs", "runs-on", "steps", "checkout", "setup-python", "pytest", "upload-artifact"]
        },
        {
          id: 60,
          q: "How store secrets?",
          a: "Settings Secrets Actions. Access secrets.NAME. Never hardcode. Environments for env-specific. Masked in logs.",
          tip: "Environment secrets.",
          diff: "medium",
          keywords: ["secrets", "Settings", "hardcode", "Environments", "masked"]
        },
        {
          id: 61,
          q: "Publish Allure to Pages?",
          a: "alluredir then gh-pages history. allure-report-action. Deploy actions-gh-pages. Enable Pages.",
          tip: "History for trends.",
          diff: "hard",
          keywords: ["alluredir", "gh-pages", "history", "allure-report-action", "GitHub Pages"]
        },
        {
          id: 62,
          q: "Failure notifications?",
          a: "Slack webhook if failure. Test count report link. Email. Only on failure.",
          tip: "Only on failure.",
          diff: "medium",
          keywords: ["Slack", "webhook", "failure", "test count", "report link", "notification"]
        },
        {
          id: 63,
          q: "Actions vs Jenkins?",
          a: "Actions cloud free YAML GitHub integration. Jenkins self-hosted plugins enterprise. I use Actions zero infrastructure.",
          tip: "Know both.",
          diff: "medium",
          keywords: ["GitHub Actions", "Jenkins", "cloud", "self-hosted", "YAML", "plugins", "enterprise"]
        },
        {
          id: 64,
          q: "Cache dependencies?",
          a: "actions/cache hashFiles requirements.txt. Install 60s to 5s. Cache drivers Allure CLI.",
          tip: "hashFiles.",
          diff: "medium",
          keywords: ["cache", "hashFiles", "requirements.txt", "pip", "speed"]
        },
        {
          id: 65,
          q: "Cross-browser in CI/CD?",
          a: "Matrix strategy chrome firefox edge. Pass to pytest. conftest launches driver. Parallel across browsers.",
          tip: "Matrix strategy.",
          diff: "medium",
          keywords: ["matrix", "chrome", "firefox", "edge", "parallel", "conftest", "cross-browser"]
        }
      ]
    },
    {
      id: "allure",
      title: "Allure Reports",
      icon: "🟤",
      questions: [
        {
          id: 66,
          q: "Why Allure?",
          a: "Rich dashboard charts. Screenshots logs per test. History trends. Severity filter. GitHub Pages. Stakeholder-friendly. Free.",
          tip: "Compare alternatives.",
          diff: "easy",
          keywords: ["dashboard", "charts", "screenshots", "logs", "history", "trends", "severity", "free"]
        },
        {
          id: 67,
          q: "Integrate Allure with Pytest?",
          a: "Install allure-pytest. Run alluredir. View allure serve. Decorators feature story severity. Attach. Step.",
          tip: "Full chain.",
          diff: "easy",
          keywords: ["allure-pytest", "alluredir", "allure serve", "@allure.feature", "@allure.story", "allure.attach"]
        },
        {
          id: 68,
          q: "Explain feature story severity.",
          a: "Feature top group. Story sub-group. Severity: BLOCKER CRITICAL NORMAL MINOR TRIVIAL. Dashboard filtering.",
          tip: "Feature then Story then Test.",
          diff: "easy",
          keywords: ["feature", "story", "severity", "BLOCKER", "CRITICAL", "NORMAL", "TRIVIAL", "filtering"]
        },
        {
          id: 69,
          q: "Attach screenshots logs?",
          a: "allure.attach screenshot as PNG. Logs as TEXT. Auto-attach on failure via hook.",
          tip: "Automatic on failure.",
          diff: "medium",
          keywords: ["allure.attach", "get_screenshot_as_png", "PNG", "TEXT", "auto-attach", "failure"]
        },
        {
          id: 70,
          q: "Categorize results?",
          a: "Feature story severity status. categories.json: Product Bug, Test Infrastructure, Outdated Test.",
          tip: "categories.json.",
          diff: "medium",
          keywords: ["categories.json", "feature", "severity", "Product Bug", "Test Infrastructure"]
        },
        {
          id: 71,
          q: "Stakeholder access?",
          a: "GitHub Pages live URL. Bookmark. Private: share HTML or Allure TestOps. Zero setup.",
          tip: "Zero setup.",
          diff: "easy",
          keywords: ["GitHub Pages", "live URL", "bookmark", "Allure TestOps", "zero setup"]
        },
        {
          id: 72,
          q: "Track trends?",
          a: "History directory. Copy previous into new results. Trend charts duration retries over N runs.",
          tip: "History copy.",
          diff: "medium",
          keywords: ["history", "trend charts", "duration", "retries", "copy"]
        }
      ]
    },
    {
      id: "testing",
      title: "Testing Types & Methodology",
      icon: "⚫",
      questions: [
        {
          id: 73,
          q: "Smoke vs Sanity vs Regression.",
          a: "Smoke: critical after build, broad shallow. Sanity: specific fix, narrow deep. Regression: comprehensive re-test full scope.",
          tip: "Real examples.",
          diff: "easy",
          keywords: ["smoke", "sanity", "regression", "critical", "broad", "shallow", "narrow", "deep"]
        },
        {
          id: 74,
          q: "Regression suite contents?",
          a: "Core flows login checkout. Buggy areas. Frequent features. Integration points. Bug-fix verification. Review every sprint.",
          tip: "Periodic review.",
          diff: "medium",
          keywords: ["core flows", "login", "checkout", "buggy", "integration", "bug-fix", "review", "sprint"]
        },
        {
          id: 75,
          q: "Cross-browser testing?",
          a: "Chrome Firefox Edge. WebDriverManager. Local --browser. CI/CD matrix. Grid or BrowserStack for wider.",
          tip: "Local and cloud.",
          diff: "medium",
          keywords: ["Chrome", "Firefox", "Edge", "WebDriverManager", "matrix", "Selenium Grid", "BrowserStack"]
        },
        {
          id: 76,
          q: "Responsive design testing?",
          a: "set_window_size: Mobile 375x667, Tablet 768x1024, Desktop 1920x1080. Check nav collapse image scaling.",
          tip: "Pixel values.",
          diff: "medium",
          keywords: ["set_window_size", "breakpoints", "mobile", "tablet", "desktop", "375", "768", "1920"]
        },
        {
          id: 77,
          q: "SEO validation?",
          a: "Title 50-60 chars. Meta desc 150-160. Single H1. Heading hierarchy. Alt attributes. Canonical. Robots. OG tags.",
          tip: "Character limits.",
          diff: "medium",
          keywords: ["title", "meta description", "H1", "heading", "alt", "canonical", "robots", "SEO"]
        },
        {
          id: 78,
          q: "SSL testing?",
          a: "requests verify True. ssl socket for expiry. Alert 30 days before. Monitor all domains.",
          tip: "Proactive monitoring.",
          diff: "medium",
          keywords: ["SSL", "verify", "expiry", "30 days", "certificate"]
        },
        {
          id: 79,
          q: "Broken links?",
          a: "Find anchors extract href. Filter mailto. requests.head. Status 400+ broken. Check images. Allure log.",
          tip: "HEAD requests.",
          diff: "medium",
          keywords: ["anchor", "href", "requests.head", "400", "broken", "HEAD", "Allure"]
        },
        {
          id: 80,
          q: "Form validation approach?",
          a: "Required empty. Valid path. Invalid formats. Boundary min max. XSS SQL injection. Whitespace. Error messages. Data-driven JSON.",
          tip: "Security testing.",
          diff: "medium",
          keywords: ["required", "valid", "invalid", "boundary", "XSS", "SQL injection", "error messages", "data-driven"]
        },
        {
          id: 81,
          q: "Performance testing?",
          a: "Response time throughput under load. Load Stress Spike Endurance. Locust Python. JMeter Java.",
          tip: "Concepts.",
          diff: "medium",
          keywords: ["performance", "response time", "load", "stress", "spike", "Locust", "JMeter"]
        },
        {
          id: 82,
          q: "Testing pyramid?",
          a: "Bottom Unit. Middle Integration API. Top UI E2E fewest. My Selenium at top critical journeys. More API tests.",
          tip: "UI minimal.",
          diff: "easy",
          keywords: ["pyramid", "unit", "integration", "API", "UI", "E2E", "critical journeys"]
        },
        {
          id: 83,
          q: "Shift-left testing?",
          a: "Testing earlier. Review requirements. Write cases during planning. Collaborate devs. PR pipelines. Static analysis.",
          tip: "Early involvement.",
          diff: "easy",
          keywords: ["shift-left", "earlier", "requirements", "planning", "collaborate", "PR", "static analysis"]
        },
        {
          id: 84,
          q: "Good bug report?",
          a: "Title severity priority environment. Steps to reproduce. Expected actual. Screenshots logs. Dev reproduces alone.",
          tip: "Dev reproduces alone.",
          diff: "easy",
          keywords: ["title", "severity", "steps to reproduce", "expected", "actual", "screenshots", "logs"]
        },
        {
          id: 85,
          q: "BVA and equivalence partitioning?",
          a: "EP divides inputs into classes test one each. BVA tests edges. Age valid 18-65: test 17 18 19 64 65 66.",
          tip: "Concrete values.",
          diff: "easy",
          keywords: ["equivalence partitioning", "boundary value", "classes", "edges", "age", "18", "65"]
        }
      ]
    },
    {
      id: "scenario",
      title: "Scenario-Based",
      icon: "🔶",
      questions: [
        {
          id: 86,
          q: "200 tests 2 hours before release?",
          a: "Smoke first 20 tests. High-risk regression. Parallelize xdist. Skip low-priority. Communicate risk to PM. Full regression post-release.",
          tip: "Risk-based.",
          diff: "medium",
          keywords: ["smoke", "risk", "parallelize", "pytest-xdist", "skip", "communicate", "PM"]
        },
        {
          id: 87,
          q: "Passes locally fails CI/CD?",
          a: "Timing waits. Resolution headless. Dependencies. Env variables. Browser version. File paths. Screenshots verbose logs.",
          tip: "Systematic.",
          diff: "medium",
          keywords: ["timing", "resolution", "dependencies", "environment variables", "browser version", "screenshots", "headless"]
        },
        {
          id: 88,
          q: "Client wants 100% automation?",
          a: "Not practical. Human judgment needed. 80% auto 20% manual. Testing pyramid. ROI. Realistic target.",
          tip: "Educate.",
          diff: "medium",
          keywords: ["100%", "not practical", "human judgment", "80%", "20%", "ROI", "testing pyramid"]
        },
        {
          id: 89,
          q: "Flaky test 7/10 passes?",
          a: "Logging. Explicit waits not sleep. AJAX timing. State dependencies. Popups. Run headed. Retry. Quarantine.",
          tip: "Systematic then quarantine.",
          diff: "medium",
          keywords: ["flaky", "logging", "explicit waits", "AJAX", "popup", "retry", "quarantine"]
        },
        {
          id: 90,
          q: "No test IDs?",
          a: "XPath text. CSS partial. Short-term workaround. Long-term: devs add data-testid. Testability guide. Shift-left.",
          tip: "Workaround and long-term.",
          diff: "medium",
          keywords: ["XPath", "CSS", "data-testid", "collaborate", "devs", "testability", "shift-left"]
        },
        {
          id: 91,
          q: "Google OAuth login?",
          a: "Cannot automate third-party. Direct bypass. Mock response. Save cookies. Test callback with mocked tokens.",
          tip: "Bypass not automate.",
          diff: "hard",
          keywords: ["OAuth", "bypass", "mock", "cookies", "tokens", "third-party", "test account"]
        },
        {
          id: 92,
          q: "New feature breaks 15 tests?",
          a: "Analyze: bugs or locator changes. Update POM classes. Update steps. Report real bugs. Track time.",
          tip: "POM payoff.",
          diff: "medium",
          keywords: ["analyze", "locators", "POM", "update", "test steps", "report", "data-testid"]
        },
        {
          id: 93,
          q: "Dynamic AJAX content?",
          a: "WebDriverWait EC. jQuery.active==0. Wait for element. Scroll wait verify. Never sleep. Spinners disappear.",
          tip: "jQuery.active spinners.",
          diff: "medium",
          keywords: ["AJAX", "WebDriverWait", "jQuery.active", "scroll", "sleep", "spinners"]
        },
        {
          id: 94,
          q: "Works on my machine?",
          a: "Share steps environment screenshots video. Compare. Test staging. Environment-specific still a bug.",
          tip: "Collaborative evidence.",
          diff: "easy",
          keywords: ["steps", "environment", "screenshots", "staging", "compare", "collaborative"]
        },
        {
          id: 95,
          q: "Zero-test project setup?",
          a: "Phase 1: framework POM conftest CI/CD. Phase 2: 10 smoke tests. Phase 3: 30-50 regression Allure. Phase 4: data-driven cross-browser.",
          tip: "Phased approach.",
          diff: "medium",
          keywords: ["phase", "framework", "POM", "CI/CD", "smoke", "regression", "Allure", "data-driven"]
        }
      ]
    },
    {
      id: "git",
      title: "Tools, Git & Collaboration",
      icon: "🔷",
      questions: [
        {
          id: 96,
          q: "Your Git workflow?",
          a: "Feature-branch: main develop feature. Branch commit push PR CI review squash merge.",
          tip: "CI on PR.",
          diff: "easy",
          keywords: ["feature-branch", "main", "develop", "PR", "CI", "code review", "squash merge"]
        },
        {
          id: 97,
          q: "Merge vs rebase?",
          a: "Merge: merge commit preserves history. Rebase: linear clean but rewrites. Rebase local merge shared. Never rebase public.",
          tip: "Never rebase shared.",
          diff: "medium",
          keywords: ["merge", "rebase", "linear history", "local", "shared", "public branches"]
        },
        {
          id: 98,
          q: "Handle merge conflicts?",
          a: "Pull latest. Open markers. Understand both. Keep combine. Remove markers commit. Run tests after.",
          tip: "Run tests after.",
          diff: "easy",
          keywords: ["pull", "conflicts", "markers", "combine", "commit", "run tests"]
        },
        {
          id: 99,
          q: "Project management tools?",
          a: "Jira sprints bugs test linking. Trello kanban. Tickets for automation, link results, track coverage.",
          tip: "Link to tracking.",
          diff: "easy",
          keywords: ["Jira", "Trello", "sprint", "bug tracking", "tickets", "coverage"]
        },
        {
          id: 100,
          q: "Collaborate with team?",
          a: "Devs: standups PRs testability Allure. PMs: planning criteria risk. QA: standards reviews knowledge sharing.",
          tip: "Proactive.",
          diff: "easy",
          keywords: ["standups", "PR reviews", "testability", "sprint planning", "acceptance criteria", "risk", "knowledge sharing"]
        }
      ]
    },
    {
      id: "bonus",
      title: "Ask the Interviewer",
      icon: "💡",
      questions: [
        {
          id: 101,
          q: "Current testing process?",
          a: "Understand maturity. From scratch or existing. Position yourself for their needs.",
          tip: "Shows what they need.",
          diff: "easy",
          keywords: ["testing process", "maturity", "manual", "automation", "framework"]
        },
        {
          id: 102,
          q: "Team tools and frameworks?",
          a: "Understand stack. Show willingness to learn or emphasize depth.",
          tip: "Adaptability.",
          diff: "easy",
          keywords: ["tools", "frameworks", "stack", "learn", "depth"]
        },
        {
          id: 103,
          q: "Manual to automated ratio?",
          a: "High manual need builder. High auto need maintainer. Position accordingly.",
          tip: "Pitch building if manual.",
          diff: "easy",
          keywords: ["manual", "automated", "ratio", "builder", "maintainer"]
        },
        {
          id: 104,
          q: "QA in release cycle?",
          a: "CI/CD or manual. Sprint or waterfall. QA sign-off. Planning involvement.",
          tip: "QA in planning.",
          diff: "easy",
          keywords: ["release cycle", "CI/CD", "sprint", "QA sign-off", "planning"]
        },
        {
          id: 105,
          q: "Success in first 90 days?",
          a: "Exact expectations. Deliverables targets coverage. Write down for follow-up.",
          tip: "Use in thank-you email.",
          diff: "easy",
          keywords: ["90 days", "success", "expectations", "deliverables", "targets"]
        }
      ]
    }
  ]
};

export const BADGES = [
  { id: 'first', icon: '🥉', name: 'First Step', desc: 'Practice your 1st question', check: (s, a) => Object.keys(s).length >= 1 },
  { id: 'silver', icon: '🥈', name: 'Getting There', desc: 'Practice 25 questions', check: (s, a) => Object.keys(s).length >= 25 },
  { id: 'half', icon: '🥇', name: 'Half Way', desc: 'Practice 50 questions', check: (s, a) => Object.keys(s).length >= 50 },
  { id: 'champ', icon: '🏆', name: 'Champion', desc: 'All 105 practiced', check: (s, a) => Object.keys(s).length >= a.length },
  { id: 'perfect', icon: '⭐', name: 'Perfect Score', desc: 'Score 10/10 on any question', check: (s, a) => { for (let k in s) { if (s[k] === 10) return true; } return false; } },
  { id: 'streak', icon: '🔥', name: 'Hot Streak', desc: '5 in a row with 7+', check: (s, a) => { let h = []; try { h = JSON.parse(localStorage.getItem('qa_history') || '[]'); } catch (e) {} if (h.length < 5) return false; let l = h.slice(-5); return l.every(v => v >= 7); } },
  { id: 'sharp', icon: '🎯', name: 'Sharpshooter', desc: 'Average score 8+', check: (s, a) => { let k = Object.keys(s); if (k.length < 5) return false; let sum = k.reduce((acc, cur) => acc + s[cur], 0); return (sum / k.length) >= 8; } },
  { id: 'allsec', icon: '🧠', name: 'All-Rounder', desc: 'All sections practiced', check: (s, a) => { let d = {}; DATA.sections.forEach(sec => { sec.questions.forEach(q => { if (s[q.id] !== undefined) d[sec.id] = 1; }); }); return Object.keys(d).length >= DATA.sections.length; } }
];

export function calcScore(txt, q) {
  if (!txt || !q) return { s: 0, yes: [], no: [], rat: { t: '❌ Weak Answer', c: 'poor' } };
  let low = txt.toLowerCase();
  let kws = q.keywords || [];
  let yes = [];
  let no = [];

  kws.forEach(kw => {
    let kl = kw.toLowerCase();
    let found = low.includes(kl);
    if (!found) {
      let words = kl.split(' ');
      if (words.length > 1) {
        let cnt = words.filter(w => low.includes(w)).length;
        if (cnt >= Math.ceil(words.length * 0.6)) found = true;
      }
    }
    if (found) yes.push(kw); else no.push(kw);
  });

  let s = kws.length > 0 ? Math.round((yes.length / kws.length) * 10) : 0;
  let rat;
  if (s >= 9) rat = { t: '🌟 Perfect Score!', c: 'excellent' };
  else if (s >= 7) rat = { t: '⭐ Great Match!', c: 'excellent' };
  else if (s >= 5) rat = { t: '👍 Good Answer', c: 'good' };
  else if (s >= 3) rat = { t: '⚠️ Needs Work', c: 'average' };
  else rat = { t: '❌ Weak Answer', c: 'poor' };

  return { s, yes, no, rat };
}
