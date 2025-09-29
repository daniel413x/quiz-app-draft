import { QuizDataObject, QuizMarkdownType } from './types';

export default {
  name: 'ASP.Net Core',
  slug: 'asp-net-core',
  category: {
    slug: 'programming',
  },
  questions: [
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which middleware ordering is correct in ASP.NET Core to ensure routing and authorization work as expected?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'UseRouting → UseAuthentication → UseAuthorization → MapControllers']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'UseAuthorization → UseRouting → UseAuthentication → MapControllers']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'UseAuthentication → MapControllers → UseRouting → UseAuthorization']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'MapControllers → UseRouting → UseAuthorization → UseAuthentication']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which attribute enables automatic model validation errors to be returned as 400 responses on Web APIs?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '[ApiController]']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '[Controller]']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '[ValidateModel]']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '[FromBody]']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In dependency injection, which lifetime creates one instance per HTTP request in ASP.NET Core?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'Scoped']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'Transient']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'Singleton']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'PerThread']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which method maps a GET endpoint in a Minimal API?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'app.MapGet("/hello", () => "hi");']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'app.UseGet("/hello", () => "hi");']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'app.RouteGet("/hello", () => "hi");']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'app.AddGet("/hello", () => "hi");']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'By default, which JSON file overrides'],
        [QuizMarkdownType.INLINE_CODE, 'appsettings.json'],
        [QuizMarkdownType.TEXT, 'when running in Development?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'appsettings.Development.json']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'appsettings.dev.json']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'development.settings.json']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'appsettings.local.json']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which binding source attribute tells ASP.NET Core to read a value from the query string?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '[FromQuery]']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '[FromBody]']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '[FromRoute]']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '[FromForm]']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'In an ASP.NET Core app, which server is cross-platform and used by default when running self-hosted?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Kestrel']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'IIS Express']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Apache']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Nginx']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which pair correctly registers and enables CORS in a typical ASP.NET Core app?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.CODE, 'builder.Services.AddCors();\napp.UseCors();']] },
        { id: '1', answer: [[QuizMarkdownType.CODE, 'builder.Services.UseCors();\napp.AddCors();']] },
        { id: '2', answer: [[QuizMarkdownType.CODE, 'app.AddCors();\napp.UseCors();']] },
        { id: '3', answer: [[QuizMarkdownType.CODE, 'builder.Services.AddCors();\napp.MapCors();']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the correct way to add a typed'],
        [QuizMarkdownType.INLINE_CODE, 'HttpClient'],
        [QuizMarkdownType.TEXT, 'using'],
        [QuizMarkdownType.INLINE_CODE, 'IHttpClientFactory'],
        [QuizMarkdownType.TEXT, '?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.CODE, 'builder.Services.AddHttpClient<MyApiClient>();']] },
        { id: '1', answer: [[QuizMarkdownType.CODE, 'builder.Services.AddSingleton<HttpClient, MyApiClient>();']] },
        { id: '2', answer: [[QuizMarkdownType.CODE, 'builder.Services.UseHttpClient<MyApiClient>();']] },
        { id: '3', answer: [[QuizMarkdownType.CODE, 'builder.Services.AddClientFactory<MyApiClient>();']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which interface provides configuration values (key/value) across providers like JSON, env vars, and secrets?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'IConfiguration']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'IOptions']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'IHostEnvironment']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'IServiceProvider']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'For options pattern, which type updates values when the underlying configuration changes without restarting the app?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'IOptionsMonitor<T>']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'IOptions<T>']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'IOptionsSnapshot<T>']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'IOptionsReloading<T>']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'How do you enable static file serving from'],
        [QuizMarkdownType.INLINE_CODE, 'wwwroot'],
        [QuizMarkdownType.TEXT, 'in the request pipeline?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'app.UseStaticFiles();']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'app.MapStaticFiles();']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'app.EnableStatic();']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'app.UseFiles();']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which environment variable controls the ASP.NET Core environment name?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, 'ASPNETCORE_ENVIRONMENT']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, 'DOTNET_ENV']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, 'CORE_ENVIRONMENT']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, 'APP_ENV']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'Which attribute restricts an action to specific HTTP methods on a controller action?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.INLINE_CODE, '[HttpGet]']] },
        { id: '1', answer: [[QuizMarkdownType.INLINE_CODE, '[Action]']] },
        { id: '2', answer: [[QuizMarkdownType.INLINE_CODE, '[Method(Get)]']] },
        { id: '3', answer: [[QuizMarkdownType.INLINE_CODE, '[Verb(Get)]']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'What is the recommended place to register background tasks that run with the host lifetime?'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Implement a Hosted Service via'], [QuizMarkdownType.INLINE_CODE, 'BackgroundService'], [QuizMarkdownType.TEXT, 'and register with'], [QuizMarkdownType.INLINE_CODE, 'AddHostedService<T>()']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Create a'], [QuizMarkdownType.INLINE_CODE, 'Thread'], [QuizMarkdownType.TEXT, 'in the controller constructor']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Run an infinite loop in'], [QuizMarkdownType.INLINE_CODE, 'Program.cs']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Schedule with'], [QuizMarkdownType.INLINE_CODE, 'Task.Run'], [QuizMarkdownType.TEXT, 'from'], [QuizMarkdownType.INLINE_CODE, 'Main']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'A valid comparison of ASP.Net Core would be of that to ________'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Spring Boot']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Selenium']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'NPM']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Amazon Web Services']] },
      ],
      correctAnswer: '0',
    },
    {
      question: [
        [QuizMarkdownType.TEXT, 'The default HTTP server used to serve ASP.Net Core applications is _______'],
      ],
      answers: [
        { id: '0', answer: [[QuizMarkdownType.TEXT, 'Kestrel']] },
        { id: '1', answer: [[QuizMarkdownType.TEXT, 'Tomcat']] },
        { id: '2', answer: [[QuizMarkdownType.TEXT, 'Jetty']] },
        { id: '3', answer: [[QuizMarkdownType.TEXT, 'Nginx']] },
      ],
      correctAnswer: '0',
    },
  ],
} as QuizDataObject;
