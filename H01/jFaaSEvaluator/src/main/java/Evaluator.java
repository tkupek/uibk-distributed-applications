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

        System.out.printf("Starting test, %d iterations for %s\n", k, url);
        for (int i = 0; i < k; i++) {
            long start = System.currentTimeMillis();
            faaSInvoker.invokeFunction(url, input);
            long finish = System.currentTimeMillis();
            long timeElapsed = finish - start;
            System.out.printf("Iteration %d took %d ms\n", i, timeElapsed);
        }
    }
}
