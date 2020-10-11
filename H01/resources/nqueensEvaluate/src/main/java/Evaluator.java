import com.google.gson.JsonObject;
import jFaaS.invokers.FaaSInvoker;
import jFaaS.invokers.HTTPGETInvoker;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Evaluator {
    public void runTest(int k, int n, String url) throws IOException {
        FaaSInvoker faaSInvoker = new HTTPGETInvoker();
        Map<String, Object> input = new HashMap<>();
        input.put("n", n);

        for (int i = 0; i < k; i++) {
            faaSInvoker.invokeFunction(url, input);
        }
    }
}
