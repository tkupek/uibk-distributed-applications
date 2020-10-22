import jFaaS.invokers.FaaSInvoker;
import jFaaS.invokers.HTTPGETInvoker;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Evaluator {
    public void runTest(int k, Map<String, Object> input, String url) throws IOException {
        FaaSInvoker faaSInvoker = new HTTPGETInvoker();

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
