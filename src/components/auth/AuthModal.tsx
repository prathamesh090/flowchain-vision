import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, 
  EyeOff, 
  Building2, 
  Mail, 
  Lock, 
  User, 
  MapPin,
  Briefcase,
  X,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import authPattern from "@/assets/auth-pattern.jpg";
import authShapes from "@/assets/auth-shapes.png";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  company: z.string().optional(),
  rememberMe: z.boolean().optional(),
});

const signupSchema = z.object({
  // Company Setup
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  businessType: z.string().min(1, "Please select a business type"),
  industry: z.string().min(1, "Please select an industry"),
  location: z.string().min(2, "Please enter company location"),
  
  // Admin User Setup
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/(?=.*[a-z])/, "Password must contain at least one lowercase letter")
    .regex(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
    .regex(/(?=.*\d)/, "Password must contain at least one number"),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, "You must agree to the terms and privacy policy"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginForm = z.infer<typeof loginSchema>;
type SignupForm = z.infer<typeof signupSchema>;

const businessTypes = [
  "Manufacturer",
  "Distributor",
  "Retailer",
  "Logistics Provider",
  "Supplier",
  "Service Provider"
];

const industries = [
  "Automotive",
  "Electronics",
  "Healthcare",
  "Food & Beverage",
  "Textile & Apparel",
  "Pharmaceuticals",
  "Consumer Goods",
  "Industrial Equipment"
];

const AuthModal = () => {
  const { isAuthModalOpen, authModalMode, closeAuthModal, switchAuthMode } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginType, setLoginType] = useState<"email" | "company">("email");
  const [isLoading, setIsLoading] = useState(false);
  const [signupStep, setSignupStep] = useState<"company" | "admin">("company");

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      company: "",
      rememberMe: false,
    },
  });

  const signupForm = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      companyName: "",
      businessType: "",
      industry: "",
      location: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const onLogin = async (data: LoginForm) => {
    setIsLoading(true);
    console.log("Login data:", data);
    setTimeout(() => {
      setIsLoading(false);
      closeAuthModal();
    }, 1000);
  };

  const onSignup = async (data: SignupForm) => {
    setIsLoading(true);
    console.log("Signup data:", data);
    setTimeout(() => {
      setIsLoading(false);
      closeAuthModal();
    }, 1000);
  };

  const handleSignupStepNext = async () => {
    const companyFields = ["companyName", "businessType", "industry", "location"];
    const isValid = await signupForm.trigger(companyFields as any);
    if (isValid) {
      setSignupStep("admin");
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={closeAuthModal}>
      <DialogContent 
        className="sm:max-w-[480px] p-0 overflow-hidden bg-background/95 backdrop-blur-sm border-primary/20 shadow-2xl"
        style={{
          backgroundImage: `url(${authPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}
      >
        {/* Background decorative shapes */}
        <div 
          className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${authShapes})`,
            backgroundSize: '120%',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/20 backdrop-blur-[1px]" />
        
        <motion.div 
          className="relative z-10"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-primary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ChainLink Pro
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeAuthModal}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Content */}
          <div className="px-6 py-6">
            <AnimatePresence mode="wait" custom={authModalMode === 'signup' ? 1 : -1}>
              {authModalMode === 'login' ? (
                <motion.div
                  key="login"
                  custom={-1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground">Welcome back</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sign in to your supply chain dashboard
                    </p>
                  </div>

                  <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-5">
                    {/* Login Type Toggle */}
                    <div className="flex bg-muted/50 rounded-lg p-1">
                      <button
                        type="button"
                        className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all ${
                          loginType === "email"
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => setLoginType("email")}
                      >
                        Email Login
                      </button>
                      <button
                        type="button"
                        className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all ${
                          loginType === "company"
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => setLoginType("company")}
                      >
                        Company Login
                      </button>
                    </div>

                    {/* Company Field */}
                    {loginType === "company" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="company">Company/Workspace</Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="company"
                            placeholder="Enter your company name or domain"
                            className="pl-10"
                            {...loginForm.register("company")}
                          />
                        </div>
                        {loginForm.formState.errors.company && (
                          <p className="text-sm text-destructive">
                            {loginForm.formState.errors.company.message}
                          </p>
                        )}
                      </motion.div>
                    )}

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
                          {...loginForm.register("email")}
                        />
                      </div>
                      {loginForm.formState.errors.email && (
                        <p className="text-sm text-destructive">
                          {loginForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10"
                          {...loginForm.register("password")}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      {loginForm.formState.errors.password && (
                        <p className="text-sm text-destructive">
                          {loginForm.formState.errors.password.message}
                        </p>
                      )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="rememberMe" 
                          {...loginForm.register("rememberMe")}
                        />
                        <Label htmlFor="rememberMe" className="text-sm">
                          Remember me
                        </Label>
                      </div>
                      <Button
                        type="button"
                        variant="link"
                        className="px-0 text-sm h-auto"
                      >
                        Forgot password?
                      </Button>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign in"}
                    </Button>

                    {/* Switch to Sign Up */}
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Button
                          type="button"
                          variant="link"
                          className="px-0 h-auto text-sm"
                          onClick={() => switchAuthMode('signup')}
                        >
                          Sign up for free
                        </Button>
                      </p>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground">Create your workspace</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Set up your company and admin account
                    </p>
                  </div>

                  {/* Step Indicator */}
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      signupStep === 'company' ? 'bg-primary text-primary-foreground' : 'bg-primary/20 text-primary'
                    }`}>
                      1
                    </div>
                    <div className={`w-12 h-0.5 ${signupStep === 'admin' ? 'bg-primary' : 'bg-muted'}`} />
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      signupStep === 'admin' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      2
                    </div>
                  </div>

                  <form onSubmit={signupForm.handleSubmit(onSignup)} className="space-y-5">
                    <AnimatePresence mode="wait">
                      {signupStep === 'company' ? (
                        <motion.div
                          key="company-step"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <div className="text-center mb-4">
                            <h3 className="font-semibold text-foreground">Company Information</h3>
                            <p className="text-sm text-muted-foreground">Tell us about your organization</p>
                          </div>

                          {/* Company Name */}
                          <div className="space-y-2">
                            <Label htmlFor="companyName">Company Name</Label>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="companyName"
                                placeholder="Enter your company name"
                                className="pl-10"
                                {...signupForm.register("companyName")}
                              />
                            </div>
                            {signupForm.formState.errors.companyName && (
                              <p className="text-sm text-destructive">
                                {signupForm.formState.errors.companyName.message}
                              </p>
                            )}
                          </div>

                          {/* Business Type */}
                          <div className="space-y-2">
                            <Label htmlFor="businessType">Business Type</Label>
                            <Select onValueChange={(value) => signupForm.setValue("businessType", value)}>
                              <SelectTrigger className="w-full">
                                <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
                                <SelectValue placeholder="Select business type" />
                              </SelectTrigger>
                              <SelectContent>
                                {businessTypes.map((type) => (
                                  <SelectItem key={type} value={type}>{type}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {signupForm.formState.errors.businessType && (
                              <p className="text-sm text-destructive">
                                {signupForm.formState.errors.businessType.message}
                              </p>
                            )}
                          </div>

                          {/* Industry */}
                          <div className="space-y-2">
                            <Label htmlFor="industry">Industry</Label>
                            <Select onValueChange={(value) => signupForm.setValue("industry", value)}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                              <SelectContent>
                                {industries.map((industry) => (
                                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {signupForm.formState.errors.industry && (
                              <p className="text-sm text-destructive">
                                {signupForm.formState.errors.industry.message}
                              </p>
                            )}
                          </div>

                          {/* Location */}
                          <div className="space-y-2">
                            <Label htmlFor="location">Company Location</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="location"
                                placeholder="City, Country"
                                className="pl-10"
                                {...signupForm.register("location")}
                              />
                            </div>
                            {signupForm.formState.errors.location && (
                              <p className="text-sm text-destructive">
                                {signupForm.formState.errors.location.message}
                              </p>
                            )}
                          </div>

                          {/* Next Button */}
                          <Button
                            type="button"
                            onClick={handleSignupStepNext}
                            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                          >
                            Continue <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="admin-step"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4"
                        >
                          <div className="text-center mb-4">
                            <h3 className="font-semibold text-foreground">Admin Account</h3>
                            <p className="text-sm text-muted-foreground">Create your administrator account</p>
                          </div>

                          {/* Back Button */}
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={() => setSignupStep('company')}
                            className="mb-4 px-0"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to company info
                          </Button>

                          {/* Full Name */}
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="fullName"
                                placeholder="Enter your full name"
                                className="pl-10"
                                {...signupForm.register("fullName")}
                              />
                            </div>
                            {signupForm.formState.errors.fullName && (
                              <p className="text-sm text-destructive">
                                {signupForm.formState.errors.fullName.message}
                              </p>
                            )}
                          </div>

                          {/* Email */}
                          <div className="space-y-2">
                            <Label htmlFor="email">Work Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="email"
                                type="email"
                                placeholder="Enter your work email"
                                className="pl-10"
                                {...signupForm.register("email")}
                              />
                            </div>
                            {signupForm.formState.errors.email && (
                              <p className="text-sm text-destructive">
                                {signupForm.formState.errors.email.message}
                              </p>
                            )}
                          </div>

                          {/* Password */}
                          <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a strong password"
                                className="pl-10 pr-10"
                                {...signupForm.register("password")}
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                            {signupForm.formState.errors.password && (
                              <p className="text-sm text-destructive">
                                {signupForm.formState.errors.password.message}
                              </p>
                            )}
                          </div>

                          {/* Confirm Password */}
                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                                className="pl-10 pr-10"
                                {...signupForm.register("confirmPassword")}
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                            {signupForm.formState.errors.confirmPassword && (
                              <p className="text-sm text-destructive">
                                {signupForm.formState.errors.confirmPassword.message}
                              </p>
                            )}
                          </div>

                          {/* Terms Agreement */}
                          <div className="flex items-start space-x-2">
                            <Checkbox 
                              id="agreeToTerms" 
                              {...signupForm.register("agreeToTerms")}
                            />
                            <Label htmlFor="agreeToTerms" className="text-sm leading-5">
                              I agree to the{" "}
                              <Button variant="link" className="px-0 h-auto text-sm">
                                Terms of Service
                              </Button>{" "}
                              and{" "}
                              <Button variant="link" className="px-0 h-auto text-sm">
                                Privacy Policy
                              </Button>
                            </Label>
                          </div>
                          {signupForm.formState.errors.agreeToTerms && (
                            <p className="text-sm text-destructive">
                              {signupForm.formState.errors.agreeToTerms.message}
                            </p>
                          )}

                          {/* Submit Button */}
                          <Button
                            type="submit"
                            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                            disabled={isLoading}
                          >
                            {isLoading ? "Creating workspace..." : "Create workspace"}
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Switch to Login */}
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Button
                          type="button"
                          variant="link"
                          className="px-0 h-auto text-sm"
                          onClick={() => switchAuthMode('login')}
                        >
                          Sign in
                        </Button>
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;