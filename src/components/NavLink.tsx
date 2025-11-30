import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  variant?: "default" | "primary" | "glass";
  size?: "sm" | "md" | "lg";
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ 
    className, 
    activeClassName, 
    pendingClassName, 
    to, 
    variant = "default",
    size = "md",
    ...props 
  }, ref) => {
    // Base styles
    const baseStyles = "font-sans font-semibold transition-all duration-300 relative overflow-hidden group";
    
    // Size variants
    const sizeStyles = {
      sm: "text-sm px-3 py-2",
      md: "text-base px-4 py-3",
      lg: "text-lg px-6 py-4"
    };
    
    // Color variants
    const variantStyles = {
      default: cn(
        "text-gray-300 hover:text-white",
        "hover:bg-white/5",
        "border-b-2 border-transparent",
        "hover:border-red-500/50"
      ),
      primary: cn(
        "text-white bg-red-600 hover:bg-red-700",
        "shadow-lg shadow-red-500/25",
        "hover:shadow-red-500/40",
        "hover:scale-105",
        "border-2 border-red-500"
      ),
      glass: cn(
        "text-white bg-white/10 backdrop-blur-sm",
        "hover:bg-white/20",
        "border border-white/20",
        "hover:border-white/40",
        "hover:scale-105"
      )
    };

    // Active state styles
    const activeStyles = cn(
      "text-white font-bold",
      "bg-gradient-to-r from-red-600 to-red-700",
      "shadow-lg shadow-red-500/30",
      "border-b-2 border-red-500",
      "scale-105"
    );

    // Pending state styles
    const pendingStyles = cn(
      "text-gray-400",
      "bg-white/5",
      "animate-pulse"
    );

    // Hover effects
    const hoverEffect = `
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500/10 before:to-transparent
      before:opacity-0 before:transition-opacity before:duration-300
      group-hover:before:opacity-100
      after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500
      after:transition-all after:duration-300 after:ease-out
      group-hover:after:w-full
    `;

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            baseStyles,
            sizeStyles[size],
            variantStyles[variant],
            hoverEffect,
            isActive && cn(activeStyles, activeClassName),
            isPending && cn(pendingStyles, pendingClassName),
            !isActive && !isPending && className
          )
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

// Export individual styled components for convenience
export const NetflixNavLink = {
  Primary: forwardRef<HTMLAnchorElement, Omit<NavLinkCompatProps, 'variant'>>((props, ref) => (
    <NavLink ref={ref} variant="primary" {...props} />
  )),
  Glass: forwardRef<HTMLAnchorElement, Omit<NavLinkCompatProps, 'variant'>>((props, ref) => (
    <NavLink ref={ref} variant="glass" {...props} />
  )),
  Default: forwardRef<HTMLAnchorElement, Omit<NavLinkCompatProps, 'variant'>>((props, ref) => (
    <NavLink ref={ref} variant="default" {...props} />
  ))
};

NetflixNavLink.Primary.displayName = "NetflixNavLink.Primary";
NetflixNavLink.Glass.displayName = "NetflixNavLink.Glass";
NetflixNavLink.Default.displayName = "NetflixNavLink.Default";

export { NavLink };
