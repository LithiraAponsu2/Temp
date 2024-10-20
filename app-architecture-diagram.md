```mermaid
graph TD
    A[App]
    A --> B[Layout]
    B --> C[Header]
    B --> D[Sidebar]
    B --> E[Footer]
    B --> F[MainContent]

    F --> G[Dashboard]
    F --> H[UserManagement]
    F --> I[AMIManagement]
    F --> J[ChefRecipes]
    F --> K[Reports]

    G --> G1[DashboardMetrics]
    G --> G2[QuickActions]

    H --> H1[UserList]
    H --> H2[UserForm]

    I --> I1[AMIList]
    I --> I2[AMIForm]
    I --> I3[AMIDetails]
    I --> I4[AMICreationWizard]

    J --> J1[RecipeList]
    J --> J2[RecipeForm]
    J --> J3[RecipeSelector]

    K --> K1[AnalyticsDashboard]
    K --> K2[ReportGenerator]

    subgraph "Shared Components"
    S1[Button]
    S2[Input]
    S3[Modal]
    S4[Table]
    S5[Pagination]
    S6[Alert]
    end
